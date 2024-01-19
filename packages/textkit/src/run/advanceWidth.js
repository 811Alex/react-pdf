import positionsAdvanceWidth from '../positions/advanceWidth.js';

/**
 * Return run advance width
 *
 * @param {Object}  run
 * @returns {number} advance width
 */
const advanceWidth = (run) => {
  return positionsAdvanceWidth(run.positions || []);
};

export default advanceWidth;
