import { compose } from '@react-pdf/fns';
import expandStyles from './expand/index.js';
import flattenStyles from './flatten/index.js';
import transformStyles from './transform/index.js';
import resolveMediaQueries from './mediaQueries/index.js';

/**
 * Resolves styles
 *
 * @param {Object} container
 * @param {Object} style object
 * @returns {Object} resolved style object
 */
const resolveStyles = (container, style) => {
  const computeMediaQueries = (value) => resolveMediaQueries(container, value);

  return compose(
    transformStyles(container),
    expandStyles,
    computeMediaQueries,
    flattenStyles,
  )(style);
};

// Utils exported for SVG processing
export { default as transformColor } from './transform/colors.js';

export { default as processTransform } from './transform/transform.js';

export { default as flatten } from './flatten/index.js';

export default resolveStyles;
