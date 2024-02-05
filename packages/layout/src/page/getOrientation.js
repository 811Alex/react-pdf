const VALID_ORIENTATIONS = ['portrait', 'landscape'];

/**
 * @typedef {import('../types.js').Page} Page
 */

/**
 * Get page orientation. Defaults to portrait
 *
 * @param {Page} page object
 * @returns {'portrait' | 'landscape'} page orientation
 */
const getOrientation = (page) => {
  const value = page.props?.orientation || 'portrait';
  return VALID_ORIENTATIONS.includes(value) ? value : 'portrait';
};

export default getOrientation;
