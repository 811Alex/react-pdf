/**
 * @template T
 * @param {T[]} array array
 * @returns {T[]} reversed array
 */
const reverse = (array) => Array.prototype.slice.call(array, 0).reverse();

export default reverse;
