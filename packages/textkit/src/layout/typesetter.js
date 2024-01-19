import { isNil } from '@react-pdf/fns';

import copyRect from '../rect/copy.js';
import cropRect from '../rect/crop.js';
import blockHeight from '../block/height.js';
import truncateBlock from '../block/truncate.js';
import layoutParagraph from './layoutParagraph.js';
import sliceBlockAtHeight from '../block/sliceAtHeight.js';

/**
 * @typedef {Function} TypeSetter
 * @param {Object} attributedStrings attributed strings (paragraphs)
 * @returns {Object[]} paragraph blocks
 */

/**
 * Layout paragraphs inside container until it does not
 * fit anymore, performing line wrapping in the process.
 *
 * @param {Object} engines engines
 * @param {Object} options layout options
 * @param {Object} container container rect
 * @returns {TypeSetter} type setter
 */
const typesetter = (engines, options, container) => (attributedStrings) => {
  const blocks = [];
  const paragraphs = [...attributedStrings];
  const layoutBlock = layoutParagraph(engines, options);
  const maxLines = isNil(container.maxLines) ? Infinity : container.maxLines;
  const truncateEllipsis = container.truncateMode === 'ellipsis';

  let linesCount = maxLines;
  let paragraphRect = copyRect(container);
  let nextParagraph = paragraphs.shift();

  while (linesCount > 0 && nextParagraph) {
    const block = layoutBlock(paragraphRect, nextParagraph);
    const slicedBlock = block.slice(0, linesCount);
    const linesHeight = blockHeight(slicedBlock);

    const shouldTruncate =
      truncateEllipsis && block.length !== slicedBlock.length;

    linesCount -= slicedBlock.length;

    if (paragraphRect.height >= linesHeight) {
      blocks.push(shouldTruncate ? truncateBlock(slicedBlock) : slicedBlock);
      paragraphRect = cropRect(linesHeight, paragraphRect);
      nextParagraph = paragraphs.shift();
    } else {
      blocks.push(
        truncateBlock(sliceBlockAtHeight(paragraphRect.height, slicedBlock)),
      );
      break;
    }
  }

  return blocks;
};

export default typesetter;
