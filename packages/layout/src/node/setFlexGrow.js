import setYogaValue from './setYogaValue';

/**
 * Set flex grow attribute to node's Yoga instance
 *
 * @param {number} value flex grow value
 */
const setFlexGrow = (value) => {
  /**
   * @param {Object} node node instance
   * @returns {Object} node instance
   */
  return (node) => {
    return setYogaValue('flexGrow')(value || 0)(node);
  };
};

export default setFlexGrow;
