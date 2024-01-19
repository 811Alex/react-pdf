import append from './append.js';
import add from '../run/add.js';
import insert from '../run/insert.js';
import runIndexAt from './runIndexAt.js';
import stringFromCodePoints from '../utils/stringFromCodePoints.js';

/**
 * Insert glyph into attributed string
 *
 * @param {number} index
 * @param {Object} glyph
 * @param {Object} attributedString attributed string
 * @returns {Object} attributed string with new glyph
 */
const insertGlyph = (index, glyph, attributedString) => {
  const runIndex = runIndexAt(index, attributedString);

  // Add glyph to the end if run index invalid
  if (runIndex === -1) return append(glyph, attributedString);

  const codePoints = glyph?.codePoints || [];

  const string =
    attributedString.string.slice(0, index) +
    stringFromCodePoints(codePoints) +
    attributedString.string.slice(index);

  const runs = attributedString.runs.map((run, i) => {
    if (i === runIndex) return insert(index - run.start, glyph, run);

    if (i > runIndex) return add(codePoints.length, run);

    return run;
  });

  return Object.assign({}, attributedString, { string, runs });
};

export default insertGlyph;
