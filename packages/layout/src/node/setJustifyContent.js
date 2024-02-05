import * as Yoga from 'yoga-layout';
import { isNil } from '@react-pdf/fns';

const JUSTIFY_CONTENT = {
  center: Yoga.Justify.Center,
  'flex-end': Yoga.Justify.FlexEnd,
  'space-between': Yoga.Justify.SpaceBetween,
  'space-around': Yoga.Justify.SpaceAround,
  'space-evenly': Yoga.Justify.SpaceEvenly,
};

/**
 * Set justify content attribute to node's Yoga instance
 *
 * @param {string} value justify content value
 */
const setJustifyContent = (value) => {
  /**
   * @param {Object} node node instance
   * @returns {Object} node instance
   */
  return (node) => {
    const { yogaNode } = node;

    if (!isNil(value) && yogaNode) {
      const justifyContent = JUSTIFY_CONTENT[value] || Yoga.Justify.FlexStart;
      yogaNode.setJustifyContent(justifyContent);
    }

    return node;
  };
};

export default setJustifyContent;
