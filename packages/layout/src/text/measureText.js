/* eslint-disable no-param-reassign */

import * as Yoga from 'yoga-layout';

import layoutText from './layoutText';
import linesWidth from './linesWidth';
import linesHeight from './linesHeight';

/**
 * @typedef {import('../types.js').Page} Page
 * @typedef {import('../types.js').Node} Node
 */

const ALIGNMENT_FACTORS = { center: 0.5, right: 1 };

/**
 * Yoga text measure function
 *
 * @param {Page} page page
 * @param {Node} node node
 * @param {Object} fontStore font store
 */
const measureText = (page, node, fontStore) => {
  /**
   * @param {number} width width
   * @param {number} widthMode width mode
   * @param {number} height height
   * @returns {{ width?: number, height?: number }} text width and height
   */
  return (width, widthMode, height) => {
    if (widthMode === Yoga.MeasureMode.Exactly) {
      if (!node.lines) node.lines = layoutText(node, width, height, fontStore);

      return { height: linesHeight(node) };
    }

    if (widthMode === Yoga.MeasureMode.AtMost) {
      const alignFactor = ALIGNMENT_FACTORS[node.style?.textAlign] || 0;

      if (!node.lines) {
        node.lines = layoutText(node, width, height, fontStore);
        node.alignOffset = (width - linesWidth(node)) * alignFactor; // Compensate align in variable width containers
      }

      return {
        height: linesHeight(node),
        width: Math.min(width, linesWidth(node)),
      };
    }

    return {};
  };
};

export default measureText;
