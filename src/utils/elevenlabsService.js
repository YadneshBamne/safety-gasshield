/**
 * ElevenLabs Text-to-Speech Service
 * Generates audio from text using ElevenLabs API with caching
 */

const ELEVENLABS_API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY;
const ELEVENLABS_API_URL = 'https://api.elevenlabs.io/v1/text-to-speech';
const ELEVENLABS_VOICES_URL = 'https://api.elevenlabs.io/v1/voices';

// Default voice ID will be fetched dynamically
let SELECTED_VOICE_ID = null;

const CACHE_PREFIX = 'elevenlabs_audio_ts_';
const CACHE_EXPIRY_MS = 30 * 24 * 60 * 60 * 1000; // 30 days

/**
 * Fetch available voices from ElevenLabs and select an Indian male voice
 */
async function getAvailableVoices() {
  try {
    const response = await fetch(ELEVENLABS_VOICES_URL, {
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch voices: ${response.statusText}`);
    }

    const data = await response.json();
    return data.voices;
  } catch (error) {
    console.error('Error fetching voices:', error);
    return [];
  }
}

/**
 * Select best voice available for free tier
 */
async function selectFreeVoice() {
  if (SELECTED_VOICE_ID) return SELECTED_VOICE_ID;

  const voices = await getAvailableVoices();
  
  // Filter for premade (free tier safe) voices to avoid 402 Payment Required errors
  const freeVoices = voices.filter(v => v.category === 'premade');

  // Try to find Indian-specific voice among the *free* pool
  const indianVoice = freeVoices.find(v => 
    v.labels?.accent?.toLowerCase().includes('indian') ||
    v.name?.toLowerCase().includes('indian') ||
    v.name?.toLowerCase().includes('vikram') ||
    v.name?.toLowerCase().includes('ravi')
  );

  if (indianVoice) {
    SELECTED_VOICE_ID = indianVoice.voice_id;
    console.log(`Selected free Indian voice: ${indianVoice.name} (${indianVoice.voice_id})`);
    return SELECTED_VOICE_ID;
  }

  // Fallback: use first available free male voice
  const maleVoice = freeVoices.find(v => 
    v.labels?.gender?.toLowerCase().includes('male') ||
    v.labels?.gender?.toLowerCase() === 'm'
  );

  if (maleVoice) {
    SELECTED_VOICE_ID = maleVoice.voice_id;
    console.log(`Fallback to free male voice: ${maleVoice.name} (${maleVoice.voice_id})`);
    return SELECTED_VOICE_ID;
  }

  // Last resort: use first available free voice (e.g., Rachel, Drew, etc.)
  if (freeVoices.length > 0) {
    SELECTED_VOICE_ID = freeVoices[0].voice_id;
    console.log(`Using first available free voice: ${freeVoices[0].name} (${freeVoices[0].voice_id})`);
    return SELECTED_VOICE_ID;
  }

  throw new Error('No premade/free voices available in ElevenLabs account');
}

/**
 * Get cached audio blob if available and not expired
 */
function getCachedAudio(sceneIdx) {
  try {
    const cacheKey = `${CACHE_PREFIX}${sceneIdx}`;
    const cached = localStorage.getItem(cacheKey);
    if (!cached) return null;

    const { data, alignment, timestamp } = JSON.parse(cached);
    const isExpired = Date.now() - timestamp > CACHE_EXPIRY_MS;

    if (isExpired) {
      localStorage.removeItem(cacheKey);
      return null;
    }

    // Convert base64 back to Blob
    const binaryString = atob(data);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return { audioBlob: new Blob([bytes], { type: 'audio/mpeg' }), alignment };
  } catch (e) {
    console.warn('Cache retrieval failed:', e);
    return null;
  }
}

/**
 * Cache audio blob for future use (optimized for large files)
 */
function setCachedAudio(sceneIdx, blob, alignment) {
  try {
    blob.arrayBuffer().then(arrayBuffer => {
      // Use a more efficient method for large files
      const uint8array = new Uint8Array(arrayBuffer);
      let binary = '';
      const chunkSize = 8192; // Process in chunks to avoid stack overflow
      
      for (let i = 0; i < uint8array.length; i += chunkSize) {
        binary += String.fromCharCode.apply(null, uint8array.subarray(i, i + chunkSize));
      }
      
      const base64String = btoa(binary);
      const cacheKey = `${CACHE_PREFIX}${sceneIdx}`;
      localStorage.setItem(
        cacheKey,
        JSON.stringify({
          data: base64String,
          alignment,
          timestamp: Date.now()
        })
      );
      console.log(`Cached narration for scene ${sceneIdx}`);
    });
  } catch (e) {
    console.warn('Cache storage failed:', e);
  }
}

/**
 * Generate audio from text using ElevenLabs API
 * @param {string} text - Narration text
 * @param {number} sceneIdx - Scene index for caching
 * @returns {Promise<{audioBlob: Blob, alignment: any}>} Audio blob and timestamps
 */
export async function generateNarration(text, sceneIdx) {
  // Check cache first
  const cachedAudio = getCachedAudio(sceneIdx);
  if (cachedAudio) {
    console.log(`Using cached audio for scene ${sceneIdx}`);
    return cachedAudio;
  }

  if (!ELEVENLABS_API_KEY) {
    throw new Error('ElevenLabs API key not configured. Add VITE_ELEVENLABS_API_KEY to .env.local');
  }

  try {
    // Dynamically select a free-tier compatible voice
    if (!SELECTED_VOICE_ID) {
      console.log('Fetching available free voices to avoid Payment Required...');
      await selectFreeVoice();
    }

    console.log(`Generating narration for scene ${sceneIdx} with selected free voice ${SELECTED_VOICE_ID}...`);
    
    const response = await fetch(`${ELEVENLABS_API_URL}/${SELECTED_VOICE_ID}/with-timestamps`, {
      method: 'POST',
      headers: {
        'xi-api-key': ELEVENLABS_API_KEY,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text,
        model_id: 'eleven_turbo_v2',
        voice_settings: {
          stability: 0.5,
          similarity_boost: 0.75,
        },
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`ElevenLabs API Error: ${error.detail?.message || response.statusText}`);
    }

    const { audio_base64, alignment } = await response.json();
    
    // Convert base64 to Blob
    const binaryString = atob(audio_base64);
    const bytes = new Uint8Array(binaryString.length);
    for (let i = 0; i < binaryString.length; i++) {
        bytes[i] = binaryString.charCodeAt(i);
    }
    const audioBlob = new Blob([bytes], { type: 'audio/mpeg' });
    
    // Cache the audio and alignment for future use
    setCachedAudio(sceneIdx, audioBlob, alignment);
    
    console.log(`Successfully generated narration for scene ${sceneIdx}`);
    return { audioBlob, alignment };
  } catch (error) {
    console.error('Failed to generate narration:', error);
    throw error;
  }
}

/**
 * Create URL for audio blob (handles both cached and freshly generated)
 */
export function createAudioURL(blob) {
  return URL.createObjectURL(blob);
}

/**
 * Cleanup audio URL to prevent memory leaks
 */
export function revokeAudioURL(url) {
  if (url) URL.revokeObjectURL(url);
}
