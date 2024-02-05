import { isNil } from '@react-pdf/fns';

/**
 * @typedef {import('../types.js').Page} Page
 */

/**
 * Checks if page has auto height
 *
 * @param {Page} page page
 * @returns {boolean} is page height auto
 */
const isHeightAuto = (page) => isNil(page.box?.height);

export default isHeightAuto;
