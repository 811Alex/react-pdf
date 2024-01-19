import transformUnits from './units.js';
import transformColor from './colors.js';
import processTransform from './transform.js';
import processFontWeight from './fontWeight.js';
import processObjectPosition from './objectPosition.js';
import processTransformOrigin from './transformOrigin.js';
import castFloat from '../utils/castFloat.js';

const handlers = {
  transform: processTransform,
  fontWeight: processFontWeight,
  objectPositionX: processObjectPosition,
  objectPositionY: processObjectPosition,
  transformOriginX: processTransformOrigin,
  transformOriginY: processTransformOrigin,
};

const transformStyle = (key, value, container) => {
  const result = handlers[key] ? handlers[key](value) : value;

  return transformColor(transformUnits(container, castFloat(result)));
};

/**
 * @typedef {Function} Transform
 * @param {Object} style styles object
 * @returns {Object} transformed styles
 */

/**
 * Transform styles values
 *
 * @param {Object} container
 * @returns {Transform} transform function
 */
const transform = (container) => (style) => {
  if (!style) return style;

  const propsArray = Object.keys(style);
  const resolvedStyle = {};

  for (let i = 0; i < propsArray.length; i += 1) {
    const key = propsArray[i];
    const value = style[key];
    const transformed = transformStyle(key, value, container);

    resolvedStyle[key] = transformed;
  }

  return resolvedStyle;
};

export default transform;
