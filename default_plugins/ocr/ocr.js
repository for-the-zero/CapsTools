const $ = require('jquery');
const { ipcRenderer } = require('electron');

/*
const ocr = require('@paddle-js-models/ocr');
Uncaught Error: require() of ES Module ......\node_modules\d3-polygon\src\index.js from ......\node_modules\@paddle-js-models\ocr\lib\index.js not supported.
Instead change the require of ......\node_modules\d3-polygon\src\index.js in ......\node_modules\@paddle-js-models\ocr\lib\index.js to a dynamic import() which is available in all CommonJS modules.

const ocr = await import('../../node_modules/@paddle-js-models/ocr/lib/index.js')
Uncaught ReferenceError: exports is not definedat index.js:3:23

const ocr = await import('./packed.js');
Uncaught ReferenceError: parcelRequire is not defined

const ocr = await import('@paddle-js-models/ocr');
Uncaught TypeError: Failed to resolve module specifier '@paddle-js-models/ocr');

import * as ocr from '@paddle-js-models/ocr'; // in document
Uncaught TypeError: Failed to resolve module specifier "@paddle-js-models/ocr". Relative references must start with either "/", "./", or "../".
*/

ipcRenderer.on('ocr-screenshot', async(event, data) => {
    let blob = new Blob([data.buffer], { type: 'image/png' });
    let img = new Image();
    img.src = URL.createObjectURL(blob);
    $('body').append(img);
    //let res = await ocr.recognize(data);
    console.log(ocr);
});