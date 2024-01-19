import getPadding from '../node/getPadding.js';

const getContentArea = (page) => {
  const height = page.style?.height;
  const { paddingTop, paddingBottom } = getPadding(page);

  return height - paddingBottom - paddingTop;
};

export default getContentArea;
