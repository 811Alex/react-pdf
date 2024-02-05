import * as Yoga from 'yoga-layout';

/**
 * @typedef {import('../types.js').Page} Page
 * @typedef {import('../types.js').Node} Node
 */

const getAspectRatio = (viewbox) => {
  if (!viewbox) return null;
  return (viewbox.maxX - viewbox.minX) / (viewbox.maxY - viewbox.minY);
};

/**
 * Yoga svg measure function
 *
 * @param {Page} page page
 * @param {Node} node node
 */
const measureCanvas = (page, node) => {
  /**
   * @typedef {Function} MeasureSvg
   * @param {number} width
   * @param {number} widthMode
   * @param {number} height
   * @param {number} heightMode
   * @returns {{ width?: number, height?: number }} svg width and height
   */
  return (width, widthMode, height, heightMode) => {
    const aspectRatio = getAspectRatio(node.props.viewBox) || 1;

    if (
      widthMode === Yoga.MeasureMode.Exactly ||
      widthMode === Yoga.MeasureMode.AtMost
    ) {
      return { width, height: width / aspectRatio };
    }

    if (heightMode === Yoga.MeasureMode.Exactly) {
      return { width: height * aspectRatio };
    }

    return {};
  };
};

export default measureCanvas;
