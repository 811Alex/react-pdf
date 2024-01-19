import React from 'react';
import ReactPDF, { Document, Page, StyleSheet } from '@react-pdf/renderer';

import Svg0 from './svg.js';
import Svg1 from './Svg1.js';
import Svg2 from './Svg2.js';
import Svg4 from './Svg4.js';
import Star from './Star.js';
import Heart from './Heart.js';

console.log(`React version: ${React.version}`);
console.log(`React-pdf version: ${ReactPDF.version}`);

const styles = StyleSheet.create({
  page: {
    fontSize: 20,
    color: 'black',
    padding: '10',
  },
});

const App = () => {
  return (
    <Document title="Hey!" subject="Test">
      <Page size="A4" style={styles.page}>
        <Star />
        <Svg0 />
        <Svg1 />
        <Svg2 />
        <Svg4 />
        <Heart />
      </Page>
    </Document>
  );
};

export default App;
