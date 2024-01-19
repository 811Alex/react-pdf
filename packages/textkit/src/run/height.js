import ascent from './ascent.js';
import descent from './descent.js';
import lineGap from './lineGap.js';

/**
 * Get run height
 *
 * @param {Object} run
 * @returns {number} height
 */
const height = (run) => {
  const lineHeight = run.attributes?.lineHeight;
  return lineHeight || lineGap(run) + ascent(run) - descent(run);
};

export default height;
