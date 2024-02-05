import setYogaValue from './setYogaValue';

/**
 * Set flex shrink attribute to node's Yoga instance
 *
 * @param {number} value flex shrink value
 */
const setFlexShrink = (value) => {
  /**
   * @param {Object} node node instance
   * @returns {Object} node instance
   */
  return (node) => {
    return setYogaValue('flexShrink')(value || 1)(node);
  };
};

export default setFlexShrink;
