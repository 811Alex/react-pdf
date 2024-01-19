import renderNode from './primitives/renderNode.js';
import addMetadata from './operations/addMetadata.js';
import addBookmarks from './operations/addBookmarks.js';

const render = (ctx, doc) => {
  const pages = doc.children || [];
  const options = { imageCache: new Map() };

  addMetadata(ctx, doc);

  pages.forEach((page) => renderNode(ctx, page, options));

  addBookmarks(ctx, doc);

  ctx.end();

  return ctx;
};

export default render;
