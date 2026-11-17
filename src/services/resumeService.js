import resume from '../data/resume.js';

// Swap this body for a fetch('/api/resume') call once the backend exists.
export async function getResume() {
  return resume;
}
