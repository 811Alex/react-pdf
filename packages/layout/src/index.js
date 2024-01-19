import { asyncCompose } from '@react-pdf/fns';

import resolveSvg from './steps/resolveSvg.js';
import resolveYoga from './steps/resolveYoga.js';
import resolveZIndex from './steps/resolveZIndex.js';
import resolveAssets from './steps/resolveAssets.js';
import resolveStyles from './steps/resolveStyles.js';
import resolveOrigins from './steps/resolveOrigins.js';
import resolveBookmarks from './steps/resolveBookmarks.js';
import resolvePageSizes from './steps/resolvePageSizes.js';
import resolvePagination from './steps/resolvePagination.js';
import resolveDimensions from './steps/resolveDimensions.js';
import resolveTextLayout from './steps/resolveTextLayout.js';
import resolveInheritance from './steps/resolveInheritance.js';
import resolvePagePaddings from './steps/resolvePagePaddings.js';
import resolvePercentRadius from './steps/resolvePercentRadius.js';
import resolvePercentHeight from './steps/resolvePercentHeight.js';
import resolveLinkSubstitution from './steps/resolveLinkSubstitution.js';

const layout = asyncCompose(
  resolveZIndex,
  resolveOrigins,
  resolvePagination,
  resolveTextLayout,
  resolvePercentRadius,
  resolveDimensions,
  resolveSvg,
  resolveAssets,
  resolveInheritance,
  resolvePercentHeight,
  resolvePagePaddings,
  resolveStyles,
  resolveLinkSubstitution,
  resolveBookmarks,
  resolvePageSizes,
  resolveYoga,
);

export default layout;
