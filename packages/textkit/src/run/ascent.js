import scale from './scale.js';

/**
 * @typedef {import('../types.js').Run} Run
 */

/**
 * Get run ascent
 *
 * @param {Run} run run
 * @returns {number} ascent
 */
export default function ascent(run) {
  const attachmentHeight = run.attributes?.attachment?.height || 0;
  const fontAscent = run.attributes?.font?.ascent || 0;

  return Math.max(attachmentHeight, fontAscent * scale(run));
}
