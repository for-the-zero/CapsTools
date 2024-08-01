const { ipcRenderer } = require('electron');
const $ = require('jquery');


ipcRenderer.on('reflash',(event,datas)=>{
    $('.panel').removeClass('panel-bottom');
    $('.panel').removeClass('panel-top');
    setTimeout(() => {
        if (datas.config.app_settings.panel_place == 'top'){
            $('.panel').addClass('panel-top');
        } else {
            $('.panel').addClass('panel-bottom');
        };
    }, 350);
});
ipcRenderer.on('hide',(event)=>{
    $('.panel').removeClass('panel-bottom');
    $('.panel').removeClass('panel-top');
});