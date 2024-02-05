/* eslint-disable no-unused-expressions */
import { isNil, upperFirst, matchPercent } from '@react-pdf/fns';

/**
 * Set generic yoga attribute to node's Yoga instance, handing `auto`, edges and percentage cases
 *
 * @param {string} attr property
 * @param {number} [edge] edge
 */
const setYogaValue = (attr, edge) => {
  /**
   * @param {any} value
   */
  return (value) => {
    /**
     * @param {Object} node node instance
     * @returns {Object} node instance
     */
    return (node) => {
      const { yogaNode } = node;

      if (!isNil(value) && yogaNode) {
        const hasEdge = !isNil(edge);
        const fixedMethod = `set${upperFirst(attr)}`;
        const autoMethod = `${fixedMethod}Auto`;
        const percentMethod = `${fixedMethod}Percent`;
        const percent = matchPercent(value);

        if (percent && !yogaNode[percentMethod]) {
          throw new Error(
            `You can't pass percentage values to ${attr} property`,
          );
        }

        if (percent) {
          if (hasEdge) {
            yogaNode[percentMethod]?.(edge, percent.value);
          } else {
            yogaNode[percentMethod]?.(percent.value);
          }
        } else if (value === 'auto') {
          if (hasEdge) {
            yogaNode[autoMethod]?.(edge);
          } else {
            yogaNode[autoMethod]?.();
          }
        } else if (hasEdge) {
          yogaNode[fixedMethod]?.(edge, value);
        } else {
          yogaNode[fixedMethod]?.(value);
        }
      }

      return node;
    };
  };
};

export default setYogaValue;
