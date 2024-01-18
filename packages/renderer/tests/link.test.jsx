import path from 'node:path';
import url from 'node:url';
import { describe, expect, test } from 'vitest';

import { Document, Page, Link, Font, Text } from '@react-pdf/renderer';
import renderToImage from './renderComponent';

// pdf.js does not render default fonts in Node.js so we need to register one
const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const openSans = path.resolve(dirname, './fonts/OpenSans.ttf');
Font.register({
  family: 'Open Sans',
  src: openSans,
});

const mount = async (children) => {
  const image = await renderToImage(
    <Document>
      <Page size={[50, 25]}>{children}</Page>
    </Document>,
  );

  return image;
};

describe('Link', () => {
  test('should render text', async () => {
    const image = await mount(
      <Link
        href="https://github.com/wojtekmaj/react-pdf"
        style={{ fontFamily: 'Open Sans' }}
      >
        hello
      </Link>,
    );

    expect(image).toMatchImageSnapshot();
  });

  test('should render TEXT component', async () => {
    const image = await mount(
      <Link
        href="https://github.com/wojtekmaj/react-pdf"
        style={{ fontFamily: 'Open Sans', textDecoration: 'none' }}
      >
        he
        <Text style={{ textDecoration: 'underline' }}>llo</Text>
      </Link>,
    );

    expect(image).toMatchImageSnapshot();
  });
});
