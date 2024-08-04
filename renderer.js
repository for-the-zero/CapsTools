const { ipcRenderer } = require('electron');
const $ = require('jquery');

// elements
const ele_panel = $('.panel');
const ele_uactions = $('.users-actions');
const ele_dpactions = $('.depl-actions');
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
    load_actions(datas);
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

function add_actions(ele, text, action, svg){
    let ele_to_add = $(`<div class="actions-btn">${svg}<p>${text}</p></div>`);
    ele_to_add.on('click',action);
    ele.append(ele_to_add);
};
function load_actions(datas){
    let config = datas.config;
    ele_uactions.children('div').remove();
    ele_dpactions.children('div').remove();
    // TODO: all about config


    // default actions
    add_actions(ele_dpactions, 
        config.app_settings.Chinese ? '截图' : 'Screenshot', 
        call_screenshot, 
        '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M15 16h4v-4h-1.5v2.5H15zM5 10h1.5V7.5H9V6H5zm3 11v-2H2V3h20v16h-6v2zm-4-4h16V5H4zm0 0V5z"/></svg>'
    );
    add_actions(ele_dpactions, 
        'OCR', 
        call_ocr, 
        '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M5 19h14V9.825L14.175 5H5zm-2 2V3h12l6 6v12zm4-4h10v-2H7zm0-4h10v-2H7zm0-4h7V7H7zM5 19V5z"/></svg>'
    );
    add_actions(ele_dpactions, 
        config.app_settings.Chinese ? '翻译' : 'Translate', 
        call_translate, 
        '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="m12 22l-1-3H4q-.825 0-1.412-.587Q2 17.825 2 17V4q0-.825.588-1.413Q3.175 2 4 2h6l.875 3H20q.875 0 1.438.562Q22 6.125 22 7v13q0 .825-.562 1.413Q20.875 22 20 22Zm-4.85-7.4q1.725 0 2.838-1.112Q11.1 12.375 11.1 10.6q0-.2-.012-.363q-.013-.162-.063-.337h-3.95v1.55H9.3q-.2.7-.763 1.087q-.562.388-1.362.388q-.975 0-1.675-.7q-.7-.7-.7-1.725q0-1.025.7-1.725q.7-.7 1.675-.7q.45 0 .85.162q.4.163.725.488L9.975 7.55Q9.45 7 8.713 6.7q-.738-.3-1.563-.3q-1.675 0-2.862 1.187Q3.1 8.775 3.1 10.5q0 1.725 1.188 2.912Q5.475 14.6 7.15 14.6Zm6.7.5l.55-.525q-.35-.425-.637-.825q-.288-.4-.563-.85Zm1.25-1.275q.7-.825 1.063-1.575q.362-.75.487-1.175h-3.975l.3 1.05h1q.2.375.475.813q.275.437.65.887ZM13 21h7q.45 0 .725-.288Q21 20.425 21 20V7q0-.45-.275-.725Q20.45 6 20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275q-.25.95-.75 1.85q-.5.9-1.175 1.675l2.725 2.675L17.8 18l-2.7-2.7l-.9.925L15 19Z"/></svg>'
    );
    add_actions(ele_dpactions, 
        config.app_settings.Chinese ? '剪贴板识别' : 'ClipRecog', 
        call_cliprecog, 
        '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="m21.6 23l-2.7-2.7q-.55.325-1.15.513T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.187 1.25T20.3 18.9l2.7 2.7zm-5.1-4q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m4.5-9h-2V5h-2v3H7V5H5v14h5v2H3V3h6.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H21zm-9-5q.425 0 .713-.288T13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5"/></svg>'
    );
    add_actions(ele_dpactions,        
        config.app_settings.Chinese ? '文件处理' : 'FileProc',
        call_fileproc,
        '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M4 22V2h10l6 6v6h-2V9h-5V4H6v16h9v2zm17.95.375L19 19.425v2.225h-2V16h5.65v2H20.4l2.95 2.95zM6 20V4z"/></svg>'
    );
};





// defalut actions
function call_screenshot(){}; // TODO:
function call_ocr(){}; // TODO:
function call_translate(){}; // TODO:
function call_cliprecog(){}; // TODO:
function call_fileproc(){}; // TODO: