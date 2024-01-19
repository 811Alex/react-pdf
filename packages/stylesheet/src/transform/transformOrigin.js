import castFloat from '../utils/castFloat.js';
import offsetKeyword from '../utils/offsetKeyword.js';

const transformTransformOrigin = (value) =>
  offsetKeyword(value) || castFloat(value);

export default transformTransformOrigin;
