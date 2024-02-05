import * as Yoga from 'yoga-layout';
import { upperFirst } from '@react-pdf/fns';

const ALIGN = {
  'flex-start': Yoga.Align.FlexStart,
  center: Yoga.Align.Center,
  'flex-end': Yoga.Align.FlexEnd,
  stretch: Yoga.Align.Stretch,
  baseline: Yoga.Align.Baseline,
  'space-between': Yoga.Align.SpaceBetween,
  'space-around': Yoga.Align.SpaceAround,
};

/**
 * Set generic align attribute to node's Yoga instance
 *
 * @param {string} attr specific align property
 */
const setAlign = (attr) => {
  /**
   * @param {string} value align value
   */
  return (value) => {
    /**
     * @param {Object} node node instance
     * @returns {Object} node instance
     */
    return (node) => {
      const { yogaNode } = node;
      const defaultValue =
        attr === 'items' ? Yoga.Align.Stretch : Yoga.Align.Auto;

      if (yogaNode) {
        const align = ALIGN[value] || defaultValue;

        yogaNode[`setAlign${upperFirst(attr)}`](align);
      }

      return node;
    };
  };
};

export default setAlign;
