/* eslint-disable no-await-in-loop */

import reverse from './reverse';

/**
 * Performs right-to-left function composition
 *
 * @param {...Function} fns functions
 */
const compose = (...fns) => {
  /**
   * @param {any} value
   * @param {...any} args
   * @returns {any} result
   */
  return (value, ...args) => {
    let result = value;
    const reversedFns = reverse(fns);

    for (let i = 0; i < reversedFns.length; i += 1) {
      const fn = reversedFns[i];
      result = fn(result, ...args);
    }

    return result;
  };
};

export default compose;
