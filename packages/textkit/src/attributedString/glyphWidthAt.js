import runAt from './runAt.js';
import glyphIndexAt from '../run/glyphIndexAt.js';

/**
 * Get glyph width at string index
 *
 * @param {number} index string index
 * @param {Object} string attributed string
 * @returns {number} glyph width
 */
const glyphWidthAt = (index, string) => {
  const run = runAt(index, string);
  const glyphIndex = glyphIndexAt(index, run);
  return run.positions[glyphIndex].xAdvance;
};

export default glyphWidthAt;
