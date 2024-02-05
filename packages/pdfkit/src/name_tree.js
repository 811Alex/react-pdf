/*
PDFNameTree - represents a name tree object
*/

import PDFTree from './tree';

class PDFNameTree extends PDFTree {
  /**
   * @param {string} a
   * @param {string} b
   * @returns {number}
   */
  _compareKeys(a, b) {
    return a.localeCompare(b);
  }

  /**
   * @returns {string}
   */
  _keysName() {
    return 'Names';
  }

  /**
   * @param {string} k
   * @returns {String}
   */
  _dataForKey(k) {
    return new String(k);
  }
}

export default PDFNameTree;
