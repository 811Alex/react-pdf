import { PNG } from 'pngjs';

PNG.sync.read.isValid = function isValid(data) {
  try {
    return !!new PNG.sync.read(data);
  } catch (e) {
    return false;
  }
};

export default PNG.sync.read;
