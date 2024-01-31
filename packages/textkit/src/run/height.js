import ascent from './ascent.js';
import descent from './descent.js';
import lineGap from './lineGap.js';

/**
 * @typedef {import('../types.js').Run} Run
 */

/**
 * Get run height
 *
 * @param {Run} run run
 * @returns {number} height
 */
export default function height(run) {
  const lineHeight = run.attributes?.lineHeight;
  return lineHeight || lineGap(run) + ascent(run) - descent(run);
}
