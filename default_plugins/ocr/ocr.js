const $ = require('jquery');
const { ipcRenderer } = require('electron');
//const ppocr = require('./ocr_module.cjs');
const { createWorker } = require('tesseract.js');

ipcRenderer.on('ocr-screenshot', async(event, data) => {
    let blob = new Blob([data.buffer], { type: 'image/png' });
    let img = new Image();
    img.src = URL.createObjectURL(blob);
    img.id = 'ocr-image';
    $('body').append(img);

    use_tocr();
});

async function use_tocr(){
    let worker = await createWorker({
        logger: m => console.log(m)
    });
    await worker.load();
    await worker.loadLanguage('eng', './tessdata_best/eng.traineddata');
    await worker.initialize('eng');
    await worker.loadLanguage('chi_sim', './tessdata_best/chi_sim.traineddata');
    await worker.initialize('chi_sim');
    let img = document.getElementById('ocr-image');
    let result = await worker.recognize(img);
    console.log(result);
    worker.terminate();
};

async function use_ppocr(){
    let img = document.getElementById('ocr-image');
    await ppocr.init();
    let result = ppocr.recognize(img);
    console.log(result);
    //TODO:
};