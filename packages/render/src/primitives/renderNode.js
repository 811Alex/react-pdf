import * as P from '@react-pdf/primitives';
import renderSvg from './renderSvg.js';
import renderText from './renderText.js';
import renderPage from './renderPage.js';
import renderNote from './renderNote.js';
import renderImage from './renderImage.js';
import renderDebug from './renderDebug.js';
import renderCanvas from './renderCanvas.js';
import renderBorders from './renderBorders.js';
import renderBackground from './renderBackground.js';
import setLink from '../operations/setLink.js';
import clipNode from '../operations/clipNode.js';
import transform from '../operations/transform.js';
import setDestination from '../operations/setDestination.js';

const isRecursiveNode = (node) => node.type !== P.Text && node.type !== P.Svg;

const renderChildren = (ctx, node, options) => {
  ctx.save();

  if (node.box) {
    ctx.translate(node.box.left, node.box.top);
  }

  const children = node.children || [];
  const renderChild = (child) => renderNode(ctx, child, options);

  children.forEach(renderChild);

  ctx.restore();
};

const renderFns = {
  [P.Text]: renderText,
  [P.Note]: renderNote,
  [P.Image]: renderImage,
  [P.Canvas]: renderCanvas,
  [P.Svg]: renderSvg,
  [P.Link]: setLink,
};

const renderNode = (ctx, node, options) => {
  const overflowHidden = node.style?.overflow === 'hidden';
  const shouldRenderChildren = isRecursiveNode(node);

  if (node.type === P.Page) renderPage(ctx, node);

  ctx.save();

  if (overflowHidden) clipNode(ctx, node);

  transform(ctx, node);
  renderBackground(ctx, node);
  renderBorders(ctx, node);

  const renderFn = renderFns[node.type];

  if (renderFn) renderFn(ctx, node, options);

  if (shouldRenderChildren) renderChildren(ctx, node, options);

  setDestination(ctx, node);
  renderDebug(ctx, node);

  ctx.restore();
};

export default renderNode;
