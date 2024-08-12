const $ = require('jquery');
const { ipcRenderer } = require('electron');
//const ppocr = require('./ocr_module.cjs');
const Tesseract = require('tesseract.js');

ipcRenderer.on('ocr-screenshot', async(event, data) => {
    let blob = new Blob([data.buffer], { type: 'image/png' });
    let img = new Image();
    img.src = URL.createObjectURL(blob);
    img.id = 'ocr-image';
    $('body').append(img);

    use_tocr();
});

async function use_tocr(){
    
};

async function use_ppocr(){
    let img = document.getElementById('ocr-image');
    await ppocr.init();
    let result = ppocr.recognize(img);
    console.log(result);
    //TODO:
};