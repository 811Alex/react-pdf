import getOrientation from './getOrientation.js';

/**
 * Return true if page is landscape
 *
 * @param {Object} page instance
 * @returns {boolean} is page landscape
 */
const isLandscape = (page) => getOrientation(page) === 'landscape';

export default isLandscape;
