/*
PDFNumberTree - represents a number tree object
*/

import PDFTree from './tree';

class PDFNumberTree extends PDFTree {
  /**
   * @param {string} a
   * @param {string} b
   * @returns {number}
   */
  _compareKeys(a, b) {
    return parseInt(a) - parseInt(b);
  }

  /**
   * @returns {string}
   */
  _keysName() {
    return 'Nums';
  }

  /**
   * @param {string} k
   * @returns {number}
   */
  _dataForKey(k) {
    return parseInt(k);
  }
}

export default PDFNumberTree;
