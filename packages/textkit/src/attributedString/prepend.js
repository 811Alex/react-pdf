import add from '../run/add.js';
import emptyRun from '../run/empty.js';
import prependToRun from '../run/prepend.js';
import stringFromCodePoints from '../utils/stringFromCodePoints.js';

/**
 * prepend glyph into last run of attributed string
 *
 * @param {Object} glyph
 * @param {Object} attributedString attributed string
 * @returns {Object} attributed string with new glyph
 */
const prepend = (glyph, attributedString) => {
  const codePoints = glyph?.codePoints || [];
  const string = stringFromCodePoints(codePoints) + attributedString.string;

  const offset = codePoints.length;
  const firstRun = attributedString.runs[0] || emptyRun();
  const lastRuns = attributedString.runs
    .slice(1)
    .map((run) => add(offset, run));
  const runs = [prependToRun(glyph, firstRun)].concat(lastRuns);

  return Object.assign({}, attributedString, { runs, string });
};

export default prepend;
