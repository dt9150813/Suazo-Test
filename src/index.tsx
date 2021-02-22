import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { print } from 'ionicons/icons';
import * as fs from 'fs';
import './pdflib'
const { degrees, PDFDocument, rgb, StandardFonts } = require('pdf-lib');
// const { PDFDocument } = require('pdf-lib');
// const fs = require('fs');


ReactDOM.render(<App />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// async function modifyPdf() {
//     const url = 'https://cors-anywhere.herokuapp.com/https://corporations.utah.gov/pdf/llcdomestic.pdf'
//     const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())
//     const pdfDoc = await PDFDocument.load(existingPdfBytes);
//     const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

//     const pages = pdfDoc.getPages();
//     const firstPage = pages[0];
//     const { width, height } = firstPage.getSize();
//     firstPage.drawText('This text was added with JavaScript!', {
//       x: 5,
//       y: height / 2 + 300,
//       size: 50,
//       font: helveticaFont,
//       color: rgb(0.95, 0.1, 0.1),
//       rotate: degrees(0),
//     });

//     // const pdfBytes = await pdfDoc.save();
//     fs.writeFileSync('./test.pdf', await pdfDoc.save());
//   }
// modifyPdf();