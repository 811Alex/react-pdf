import castArray from './castArray.js';

const omit = (keys, object) => {
  const _keys = castArray(keys);

  const copy = Object.assign({}, object);

  _keys.forEach((key) => {
    delete copy[key];
  });

  return copy;
};

export default omit;
