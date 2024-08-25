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

function add_actions(ele, text, action, icon){
    let ele_to_add = $(`<div class="actions-btn">${icon}<p>${text}</p></div>`);
    ele_to_add.on('click',action);
    ele.append(ele_to_add);
};
async function load_actions(datas){
    let config = datas.config;
    let cjs_plugin = datas.cjs_plugin;
    ele_uactions.children('div').remove();
    ele_dpactions.children('div').remove();
    
    // costom tools
    if (config.custom_tools.length > 0){
        for (let i = 0; i < config.custom_tools.length; i++){
            let tool = config.custom_tools[i];
            if (tool.type == 'cmd'){
                let show_this_tool = false;
                try{
                    if(eval(tool.if)){
                        show_this_tool = true;
                    } else {
                        show_this_tool = false;
                    };
                } catch (e) {
                    console.log(e);
                    show_this_tool = false;
                };
                if (show_this_tool){
                    // icon
                    let tool_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21V3h9v2H5v14h14v-7h2v9zm6.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"/></svg>';
                    try {
                        if(tool.icon.startsWith('https')){
                            if(tool.icon.endsWith('.svg')){
                                $.ajax({
                                    url: tool.icon,
                                    type: 'GET',
                                    async: false,
                                    success: function(data, status, xhr){
                                        if(xhr.status == 200 && (xhr.getResponseHeader('Content-Type').includes('image/svg+xml') || xhr.getResponseHeader('Content-Type').includes('application/octet-stream'))){
                                            tool_icon = data;
                                        };
                                    }
                                });
                            } else {
                                $.ajax({
                                    url: tool.icon,
                                    type: 'GET',
                                    async: false,
                                    success: function(data, status, xhr){
                                        if(xhr.status == 200){
                                            tool_icon = `<img src="${tool.icon}" />`;
                                        };
                                    }
                                });
                            };
                        } else if(tool.icon.startsWith('<svg')){
                            tool_icon = tool.icon;
                        } else if(tool.icon.startsWith('file://')){
                            if(tool.icon.endsWith('.svg')){
                                let res = await ipcRenderer.invoke('check_svg',tool.icon.replace('file://',''));
                                if(res[0]){
                                    tool_icon = res[1];
                                };
                            } else if(tool.icon.endsWith('.png') || tool.icon.endsWith('.ico')){
                                let res = await ipcRenderer.invoke('check_img',tool.icon.replace('file://',''));
                                if(res){
                                    tool_icon = `<img src="${tool.icon}" />`;
                                };
                            };
                        };
                    }catch(e){
                        console.log(e);
                    };
                    // add action
                    add_actions(ele_uactions, tool.name, ()=>{
                        ipcRenderer.send('run_cmd',tool.command);
                    }, tool_icon);
                };
            } else if (tool.type == 'pwa') {
                // icon
                let tool_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M2 20V4h20v16zm2-2h10.5v-3.5H4zm12.5 0H20V9h-3.5zM4 12.5h10.5V9H4z"/></svg>';
                if(tool.icon == '' || tool.icon == null){
                    // nothing here >w<
                } else if (tool.icon == 'meta'){
                    let hostname = new URL(tool.url).hostname;
                    tool_icon = `<img src="https://toolb.cn/favicon/${hostname}" />`;
                } else if (tool.icon.startsWith('https')){
                    if(tool.icon.endsWith('.svg')){
                        $.ajax({
                            url: tool.icon,
                            type: 'GET',
                            async: false,
                            success: function(data, status, xhr){
                                if(xhr.status == 200 && (xhr.getResponseHeader('Content-Type').includes('image/svg+xml') || xhr.getResponseHeader('Content-Type').includes('application/octet-stream'))){
                                    tool_icon = data;
                                };
                            }
                        });
                    } else {
                        $.ajax({
                            url: tool.icon,
                            type: 'GET',
                            async: false,
                            success: function(data, status, xhr){
                                if(xhr.status == 200){
                                    tool_icon = `<img src="${tool.icon}" />`;
                                };
                            }
                        });
                    };
                };
                // add action
                add_actions(ele_uactions, tool.name, ()=>{
                    ipcRenderer.send('open_pwa',tool.url);
                }, tool_icon);
            };
        };
    };
    // cjs plugin
    if (cjs_plugin.length > 0){
        for (let i = 0; i < cjs_plugin.length; i++){
            let tool = cjs_plugin[i];
            let tool_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M3 21V3h9v2H5v14h14v-7h2v9zm6.7-5.3l-1.4-1.4L17.6 5H14V3h7v7h-2V6.4z"/></svg>';
            try {
                if(tool.icon.startsWith('https')){
                    if(tool.icon.endsWith('.svg')){
                        $.ajax({
                            url: tool.icon,
                            type: 'GET',
                            async: false,
                            success: function(data, status, xhr){
                                if(xhr.status == 200 && (xhr.getResponseHeader('Content-Type').includes('image/svg+xml') || xhr.getResponseHeader('Content-Type').includes('application/octet-stream'))){
                                    tool_icon = data;
                                };
                            }
                        });
                    } else {
                        $.ajax({
                            url: tool.icon,
                            type: 'GET',
                            async: false,
                            success: function(data, status, xhr){
                                if(xhr.status == 200){
                                    tool_icon = `<img src="${tool.icon}" />`;
                                };
                            }
                        });
                    };
                } else if(tool.icon.startsWith('<svg')){
                    tool_icon = tool.icon;
                } else if(tool.icon.startsWith('file://')){
                    if(tool.icon.endsWith('.svg')){
                        let res = await ipcRenderer.invoke('check_svg',tool.icon.replace('file://',''));
                        if(res[0]){
                            tool_icon = res[1];
                        };
                    } else if(tool.icon.endsWith('.png') || tool.icon.endsWith('.ico')){
                        let res = await ipcRenderer.invoke('check_img',tool.icon.replace('file://',''));
                        if(res){
                            tool_icon = `<img src="${tool.icon}" />`;
                        };
                    };
                };
            }catch(e){
                console.log(e);
            };
            // add action
            add_actions(ele_uactions, tool.name, ()=>{
                ipcRenderer.send('run_cjs_plugin',tool.index);
            }, tool_icon);
        };
    }





    // default actions
    if ((config.default_tools).includes('screenshot')){
        add_actions(ele_dpactions, 
            config.app_settings.Chinese ? '截图' : 'Screenshot', 
            call_screenshot, 
            '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M15 16h4v-4h-1.5v2.5H15zM5 10h1.5V7.5H9V6H5zm3 11v-2H2V3h20v16h-6v2zm-4-4h16V5H4zm0 0V5z"/></svg>'
        );
    };
    if ((config.default_tools).includes('translate')){
        add_actions(ele_dpactions, 
            config.app_settings.Chinese ? '翻译' : 'Translate', 
            call_translate, 
            '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="m12 22l-1-3H4q-.825 0-1.412-.587Q2 17.825 2 17V4q0-.825.588-1.413Q3.175 2 4 2h6l.875 3H20q.875 0 1.438.562Q22 6.125 22 7v13q0 .825-.562 1.413Q20.875 22 20 22Zm-4.85-7.4q1.725 0 2.838-1.112Q11.1 12.375 11.1 10.6q0-.2-.012-.363q-.013-.162-.063-.337h-3.95v1.55H9.3q-.2.7-.763 1.087q-.562.388-1.362.388q-.975 0-1.675-.7q-.7-.7-.7-1.725q0-1.025.7-1.725q.7-.7 1.675-.7q.45 0 .85.162q.4.163.725.488L9.975 7.55Q9.45 7 8.713 6.7q-.738-.3-1.563-.3q-1.675 0-2.862 1.187Q3.1 8.775 3.1 10.5q0 1.725 1.188 2.912Q5.475 14.6 7.15 14.6Zm6.7.5l.55-.525q-.35-.425-.637-.825q-.288-.4-.563-.85Zm1.25-1.275q.7-.825 1.063-1.575q.362-.75.487-1.175h-3.975l.3 1.05h1q.2.375.475.813q.275.437.65.887ZM13 21h7q.45 0 .725-.288Q21 20.425 21 20V7q0-.45-.275-.725Q20.45 6 20 6h-8.825l1.175 4.05h1.975V9h1.025v1.05H19v1.025h-1.275q-.25.95-.75 1.85q-.5.9-1.175 1.675l2.725 2.675L17.8 18l-2.7-2.7l-.9.925L15 19Z"/></svg>'
        );
    };
    if ((config.default_tools).includes('cliprecog')){
        add_actions(ele_dpactions, 
            config.app_settings.Chinese ? '剪贴板识别' : 'ClipRecog', 
            call_cliprecog, 
            '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="m21.6 23l-2.7-2.7q-.55.325-1.15.513T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.187 1.25T20.3 18.9l2.7 2.7zm-5.1-4q1.05 0 1.775-.725T19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19m4.5-9h-2V5h-2v3H7V5H5v14h5v2H3V3h6.175q.275-.875 1.075-1.437T12 1q1 0 1.788.563T14.85 3H21zm-9-5q.425 0 .713-.288T13 4t-.288-.712T12 3t-.712.288T11 4t.288.713T12 5"/></svg>'
        );
    };
};





// defalut actions
function call_screenshot(){
    ipcRenderer.send('screenshot');
};
function call_translate(){
    ipcRenderer.send('translate',{from:'',to:'',text:''});
};
function call_cliprecog(){
    ipcRenderer.send('cliprecog');
};