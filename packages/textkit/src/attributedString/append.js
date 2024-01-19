import { last } from '@react-pdf/fns';

import emptyRun from '../run/empty.js';
import appendToRun from '../run/append.js';
import stringFromCodePoints from '../utils/stringFromCodePoints.js';

/**
 * Append glyph into last run of attributed string
 *
 * @param {Object} glyph
 * @param {Object} attributedString attributed string
 * @returns {Object} attributed string with new glyph
 */
const append = (glyph, attributedString) => {
  const codePoints = glyph?.codePoints || [];
  const codePointsString = stringFromCodePoints(codePoints);
  const string = attributedString.string + codePointsString;

  const firstRuns = attributedString.runs.slice(0, -1);
  const lastRun = last(attributedString.runs) || emptyRun();
  const runs = firstRuns.concat(appendToRun(glyph, lastRun));

  return Object.assign({}, attributedString, { string, runs });
};

export default append;
