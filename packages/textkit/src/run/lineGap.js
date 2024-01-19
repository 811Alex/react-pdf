import scale from './scale.js';

/**
 * Get run lineGap
 *
 * @param {Object}  run
 * @returns {number} lineGap
 */
const lineGap = (run) => {
  return (run.attributes?.font?.lineGap || 0) * scale(run);
};

export default lineGap;
