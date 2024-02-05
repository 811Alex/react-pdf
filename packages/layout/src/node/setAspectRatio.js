import { isNil } from '@react-pdf/fns';

/**
 * Set aspect ratio attribute to node's Yoga instance
 *
 * @param {number} value ratio
 */
const setAspectRatio = (value) => {
  /**
   * @param {Object} node node instance
   * @returns {Object} node instance
   */
  return (node) => {
    const { yogaNode } = node;

    if (!isNil(value) && yogaNode) {
      yogaNode.setAspectRatio(value);
    }

    return node;
  };
};

export default setAspectRatio;
