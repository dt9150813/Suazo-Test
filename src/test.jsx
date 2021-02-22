// Import from 'react-native-pdf-lib'
import PDFLib, { PDFDocument, PDFPage } from 'react-native-pdf-lib';
// Modify first page in document
const page1 = PDFPage
  .modify(0)
  .drawText('This is a modification on the first page!', {
    x: 5,
    y: 235,
    color: '#F62727',
  })
  .drawRectangle({
    x: 150,
    y: 150,
    width: 50,
    height: 50,
    color: '#81C744',
  });

// Modify second page in document
const jpgPath = './test1024_1.jpg';
const pngPath = './logo.png';
const page2 = PDFPage
  .modify(1)
  .drawText('You can add images to modified pages too!')
  .drawImage(
    jpgPath,
    'jpg',
    {
      x: 5,
      y: 125,
      width: 200,
      height: 100,
      source: 'assets' // 'assets' to get image from Android assets 'path' to get image from imagePath
    }
  )
  .drawImage(
    pngPath,
    'png',
    {
      x: 5,
      y: 25,
      width: 200,
      height: 100,
      source: 'path' // 'assets' to get image from Android assets 'path' to get image from imagePath
    }
   );

// Create a PDF page to add to document
const page3 = PDFPage
  .create()
  .setMediaBox(200, 200)
  .drawText('You can add new pages to a modified PDF as well!', {
    x: 5,
    y: 235,
    color: '#007386',
  });

const existingPDF = './test.pdf';
PDFDocument
  .modify(existingPDF)
  .modifyPages(page1, page2)
  .addPage(page3)
  .write() // Returns a promise that resolves with the PDF's path
  .then(path => {
    console.log('PDF modified at: ' + path);
  });