import * as Yoga from 'yoga-layout';

const FLEX_DIRECTIONS = {
  row: Yoga.FlexDirection.Row,
  'row-reverse': Yoga.FlexDirection.RowReverse,
  'column-reverse': Yoga.FlexDirection.ColumnReverse,
};

/**
 * Set flex direction attribute to node's Yoga instance
 *
 * @param {string} value flex direction value
 */
const setFlexDirection = (value) => {
  /**
   * @param {Object} node node instance
   * @returns {Object} node instance
   */
  return (node) => {
    const { yogaNode } = node;

    if (yogaNode) {
      const flexDirection = FLEX_DIRECTIONS[value] || Yoga.FlexDirection.Column;
      yogaNode.setFlexDirection(flexDirection);
    }

    return node;
  };
};

export default setFlexDirection;
