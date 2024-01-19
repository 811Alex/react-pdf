import isNil from './isNil.js';
import castArray from './castArray.js';

const get = (target, path, defaultValue) => {
  if (isNil(target)) return defaultValue;

  const _path = castArray(path);

  let result = target;

  for (let i = 0; i < _path.length; i += 1) {
    if (isNil(result)) return undefined;

    result = result[_path[i]];
  }

  return isNil(result) ? defaultValue : result;
};

export default get;
