import getOrientation from './getOrientation';

/**
 * @typedef {import('../types.js').Page} Page
 */

/**
 * Return true if page is landscape
 *
 * @param {Page} page instance
 * @returns {boolean} is page landscape
 */
const isLandscape = (page) => getOrientation(page) === 'landscape';

export default isLandscape;
