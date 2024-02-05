/**
 * @template T
 * @param {T[]} array
 * @returns {T[]} array without last element
 */
const dropLast = (array) => array.slice(0, array.length - 1);

export default dropLast;
