import * as P from '@react-pdf/primitives';

import fetchEmojis from '../text/emoji.js';
import fetchImage from '../image/fetchImage.js';

const isImage = (node) => node.type === P.Image;

/**
 * Get all asset promises that need to be resolved
 *
 * @param {Object} fontStore font store
 * @param {Object} node root node
 * @returns {Promise<void>[]} asset promises
 */
const fetchAssets = (fontStore, node) => {
  const promises = [];
  const listToExplore = node.children?.slice(0) || [];
  const emojiSource = fontStore ? fontStore.getEmojiSource() : null;

  while (listToExplore.length > 0) {
    const n = listToExplore.shift();

    if (isImage(n)) {
      promises.push(fetchImage(n));
    }

    if (fontStore && n.style?.fontFamily) {
      promises.push(fontStore.load(n.style));
    }

    if (typeof n === 'string') {
      promises.push(...fetchEmojis(n, emojiSource));
    }

    if (typeof n.value === 'string') {
      promises.push(...fetchEmojis(n.value, emojiSource));
    }

    if (n.children) {
      n.children.forEach((childNode) => {
        listToExplore.push(childNode);
      });
    }
  }

  return promises;
};

/**
 * Fetch image, font and emoji assets in parallel.
 * Layout process will not be resumed until promise resolves.
 *
 * @param {Object} node root node
 * @param {Object} fontStore font store
 * @returns {Promise<Object>} root node
 */
const resolveAssets = async (node, fontStore) => {
  const promises = fetchAssets(fontStore, node);
  await Promise.all(promises);
  return node;
};

export default resolveAssets;
