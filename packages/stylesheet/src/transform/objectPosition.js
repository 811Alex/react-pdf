import castFloat from '../utils/castFloat.js';
import offsetKeyword from '../utils/offsetKeyword.js';

const transformObjectPosition = (value) =>
  offsetKeyword(value) || castFloat(value);

export default transformObjectPosition;
