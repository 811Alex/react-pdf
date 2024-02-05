import getOrientation from './getOrientation';

/**
 * @typedef {import('../types.js').Page} Page
 */

/**
 * Return true if page is portrait
 *
 * @param {Page} page instance
 * @returns {boolean} is page portrait
 */
const isPortrait = (page) => getOrientation(page) === 'portrait';

export default isPortrait;
