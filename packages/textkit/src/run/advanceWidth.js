import positionsAdvanceWidth from '../positions/advanceWidth.js';

/**
 * @typedef {import('../types.js').Run} Run
 */

/**
 * Return run advance width
 *
 * @param {Run} run run
 * @returns {number} advance width
 */
export default function advanceWidth(run) {
  return positionsAdvanceWidth(run.positions || []);
}
