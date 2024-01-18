import path from 'node:path';
import url from 'node:url';
import { describe, expect, test } from 'vitest';

import { Document, Page, View, Text, Font } from '@react-pdf/renderer';
import renderToImage from './renderComponent';

// pdf.js does not render default fonts in Node.js so we need to register one
const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const openSans = path.resolve(dirname, './fonts/OpenSans.ttf');
Font.register({
  family: 'Open Sans',
  src: openSans,
});

describe('debug', () => {
  test('should show size of Text component', async () => {
    const image = await renderToImage(
      <Document style={{ fontFamily: 'Open Sans' }}>
        <Page size={[50, 25]}>
          <Text debug>hello</Text>
        </Page>
      </Document>,
    );

    expect(image).toMatchImageSnapshot();
  });

  test('should show paddings and margins', async () => {
    const image = await renderToImage(
      <Document style={{ fontFamily: 'Open Sans' }}>
        <Page size={[110, 65]}>
          <View style={{ flexDirection: 'row' }}>
            <Text style={{ margin: 20 }} debug>
              a
            </Text>
            <Text style={{ padding: 20 }} debug>
              b
            </Text>
            <Text debug>c</Text>
          </View>
        </Page>
      </Document>,
    );

    expect(image).toMatchImageSnapshot();
  });

  test('should show origin pointer', async () => {
    const image = await renderToImage(
      <Document style={{ fontFamily: 'Open Sans' }}>
        <Page size={[50, 25]}>
          <Text style={{ transformOrigin: 'top left' }} debug>
            hello
          </Text>
        </Page>
      </Document>,
    );

    expect(image).toMatchImageSnapshot();
  });
});
