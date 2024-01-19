import slice from './slice.js';
import indexAtOffset from './indexAtOffset.js';

/**
 * Slice attributed string at given offset
 *
 * @param {number} offset offset
 * @param {Object} string attributedString
 * @returns {Object} attributedString
 */
const sliceAtOffset = (offset, string) => {
  const index = indexAtOffset(offset, string);
  return slice(0, index, string);
};

export default sliceAtOffset;
