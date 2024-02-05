import * as Yoga from 'yoga-layout';

const FLEX_WRAP = {
  wrap: Yoga.Wrap.Wrap,
  'wrap-reverse': Yoga.Wrap.WrapReverse,
};

/**
 * Set flex wrap attribute to node's Yoga instance
 *
 * @param {string} value flex wrap value
 */
const setFlexWrap = (value) => {
  /**
   * @param {Object} node node instance
   * @returns {Object} node instance
   */
  return (node) => {
    const { yogaNode } = node;

    if (yogaNode) {
      const flexWrap = FLEX_WRAP[value] || Yoga.Wrap.NoWrap;
      yogaNode.setFlexWrap(flexWrap);
    }

    return node;
  };
};

export default setFlexWrap;
