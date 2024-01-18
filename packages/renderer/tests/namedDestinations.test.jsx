import path from 'node:path';
import url from 'node:url';
import { describe, expect, test } from 'vitest';

import { Document, Font, Link, Page, Text, View } from '@react-pdf/renderer';
import renderToImage from './renderComponent';

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const latoRegular = path.resolve(dirname, './fonts/Lato-Regular.ttf');

Font.register({
  family: 'Lato',
  src: latoRegular,
});

const Doc = () => (
  <Document>
    <Page
      orientation="landscape"
      size="A4"
      style={{ padding: 30, fontSize: 24, fontFamily: 'Lato' }}
    >
      <View>
        <Link href="#nameddestination">
          <Text>Click me to get to the named destination</Text>
        </Link>
      </View>
      <View id="nameddestination" break>
        <Text>Here is the named destination</Text>
      </View>
    </Page>
  </Document>
);

describe('named destinations', () => {
  test('should visually match snapshot', async () => {
    const image = await renderToImage(<Doc />);

    expect(image).toMatchImageSnapshot();
  });
});
