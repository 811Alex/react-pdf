import * as Yoga from 'yoga-layout';

/**
 * Set display attribute to node's Yoga instance
 *
 * @param {string} value display
 */
const setDisplay = (value) => {
  /**
   * @param {Object} node node instance
   * @returns {Object} node instance
   */
  return (node) => {
    const { yogaNode } = node;

    if (yogaNode) {
      yogaNode.setDisplay(
        value === 'none' ? Yoga.Display.None : Yoga.Display.Flex,
      );
    }

    return node;
  };
};

export default setDisplay;
