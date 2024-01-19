import * as primitives from '@react-pdf/primitives';

import usePDF from './usePDF.js';
import PDFViewer from './PDFViewer.js';
import BlobProvider from './BlobProvider.js';
import PDFDownloadLink from './PDFDownloadLink.js';
import { pdf, version, Font, StyleSheet } from '../index.js';

const throwEnvironmentError = (name) => {
  throw new Error(
    `${name} is a Node specific API. You're either using this method in a browser, or your bundler is not loading react-pdf from the appropriate web build.`,
  );
};

export const renderToStream = () => {
  throwEnvironmentError('renderToStream');
};

export const renderToBuffer = () => {
  throwEnvironmentError('renderToBuffer');
};

export const renderToString = () => {
  throwEnvironmentError('renderToString');
};

export const renderToFile = () => {
  throwEnvironmentError('renderToFile');
};

export const render = () => {
  throwEnvironmentError('render');
};

export * from '../index.js';

export * from './usePDF.js';

export * from './PDFViewer.js';

export * from './BlobProvider.js';

export * from './PDFDownloadLink.js';

export * from '@react-pdf/primitives';

// TODO: remove this default export in next major release because it breaks tree-shacking
export default {
  pdf,
  usePDF,
  Font,
  version,
  StyleSheet,
  PDFViewer,
  BlobProvider,
  PDFDownloadLink,
  renderToStream,
  renderToString,
  renderToFile,
  render,
  ...primitives,
};
