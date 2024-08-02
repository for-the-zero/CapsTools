const { ipcRenderer } = require('electron');
const $ = require('jquery');

// elements
const ele_panel = $('.panel');
const natele_uactions = document.querySelector('.users-actions');
const natele_dpactions = document.querySelector('.depl-actions');

ipcRenderer.on('reflash',(event,datas)=>{
    ele_panel.removeClass('panel-bottom');
    ele_panel.removeClass('panel-top');
    setTimeout(() => {
        if (datas.config.app_settings.panel_place == 'top'){
            ele_panel.addClass('panel-top');
        } else {
            ele_panel.addClass('panel-bottom');
        };
    }, 350);
});
ipcRenderer.on('hide',(event)=>{
    ele_panel.removeClass('panel-bottom');
    ele_panel.removeClass('panel-top');
});

// scrolling v->h
natele_uactions.addEventListener('wheel',(e)=>{
    e.preventDefault();
    natele_uactions.scrollLeft += e.deltaY;
});
natele_dpactions.addEventListener('wheel',(e)=>{
    e.preventDefault();
    natele_dpactions.scrollLeft += e.deltaY;
});