import * as Yoga from 'yoga-layout';
import { isNil } from '@react-pdf/fns';
/**
 * Set position type attribute to node's Yoga instance
 *
 * @param {string} value position position type
 */
const setPositionType = (value) => {
  /**
   * @param {Object} node node instance
   * @returns {Object} node instance
   */
  return (node) => {
    const { yogaNode } = node;

    if (!isNil(value) && yogaNode) {
      yogaNode.setPositionType(
        value === 'absolute'
          ? Yoga.PositionType.Absolute
          : Yoga.PositionType.Relative,
      );
    }

    return node;
  };
};

export default setPositionType;
