import renderPolyline from './renderPolyline.js';

const renderPolygon = (ctx, node) => {
  renderPolyline(ctx, node);
  ctx.closePath();
};

export default renderPolygon;
