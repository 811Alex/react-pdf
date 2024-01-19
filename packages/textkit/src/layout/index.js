import { compose } from '@react-pdf/fns';

import wrapWords from './wrapWords.js';
import typesetter from './typesetter.js';
import generateGlyphs from './generateGlyphs.js';
import resolveYOffset from './resolveYOffset.js';
import preprocessRuns from './preprocessRuns.js';
import splitParagraphs from './splitParagraphs.js';
import finalizeFragments from './finalizeFragments.js';
import resolveAttachments from './resolveAttachments.js';
import applyDefaultStyles from './applyDefaultStyles.js';
import verticalAlignment from './verticalAlign.js';

/**
 * @typedef {Function} LayoutEngine
 * @param {Object} attributedString attributed string
 * @param {Object} container container rect
 * @param {Object} options layout options
 * @returns {Object[]} paragraph blocks
 */

/**
 * A LayoutEngine is the main object that performs text layout.
 * It accepts an AttributedString and a Container object
 * to layout text into, and uses several helper objects to perform
 * various layout tasks. These objects can be overridden to customize
 * layout behavior.
 *
 * @param {Object} engines engines
 * @returns {LayoutEngine} layout engine
 */
const layoutEngine =
  (engines) =>
  (attributedString, container, options = {}) => {
    const processParagraph = compose(
      resolveYOffset(),
      resolveAttachments(),
      generateGlyphs(),
      verticalAlignment(),
      wrapWords(engines, options),
    );

    const processParagraphs = (paragraphs) => paragraphs.map(processParagraph);

    return compose(
      finalizeFragments(engines, options),
      typesetter(engines, options, container),
      processParagraphs,
      splitParagraphs(),
      preprocessRuns(engines, options),
      applyDefaultStyles(),
    )(attributedString);
  };

export default layoutEngine;
