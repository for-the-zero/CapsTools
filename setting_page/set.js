const { ipcRenderer } = require('electron');
const { setColorScheme, setTheme, prompt } = require('../src/mdui.cjs');
const $ = require('jquery');

//setColorScheme('#5577FF');
setColorScheme('#FB9944');

var config = {};
ipcRenderer.on('open_set', (event, datas) => {
    config = datas.config;
    setTheme(config.app_settings.light_dark);
    if (!config.app_settings.Chinese){
        $('*').each(function(){
            if ($(this).attr('data-entext')) {
                $(this).text($(this).attr('data-entext'));
            };
        });
    };
    init_config();
});

const ele_savebtn = $('.save-btn');
const ele_cqi_input = $('.cqi-ctrl > mdui-text-field');
const ele_cqi_addbtn = $('.cqi-ctrl > mdui-button');
const ele_cqi_list = $('.cqi-list');
const ele_cjsp_input = $('.cjsp-ctrl > mdui-text-field');
const ele_cjsp_addbtn = $('.cjsp-ctrl > mdui-button');
const ele_cjsp_list = $('.cjsp-list');
const ele_up_addingbtn = $('.up-ctrl > mdui-button');
const ele_up_addbtn = $('.addup-btn');
const ele_up_tbody = $('.up-table > table > tbody');
const ele_up_adddialog = $('.addup-dialog');
const ele_lang_opt = $('.lang-opt');
const ele_lm_opt = $('.lm-opt');
const ele_pp_opt = $('.pp-opt');
const ele_up_type = $('.up-type');
const ele_up_name = $('.up-name');
const ele_up_icon = $('.up-icon');
const ele_up_if = $('.up-if');
const ele_up_command = $('.up-cmd');
const ele_up_url = $('.up-url');
const ele_sspath_span = $('.ss-path > span');
const ele_sspath_btn = $('.ss-path > mdui-button-icon');
const ele_gtm_span = $('.gtm-url > span');
const ele_gtm_btn = $('.gtm-url > mdui-button-icon');
const ele_openss = $('.open-ss');
const ele_opentl = $('.open-tl');
const ele_opencr = $('.open-cr');


$('.about-btn').on('click',()=>{
    $('.about-dialog').attr('open',true);
});
ele_lang_opt.on('click',()=>{
    if (ele_lang_opt.val() === ''){
        ele_lang_opt.val('false');
    };
});
ele_lm_opt.on('click',()=>{
    if (ele_lm_opt.val() === ''){
        ele_lm_opt.val('auto');
    };
});
ele_pp_opt.on('click',()=>{
    if (ele_pp_opt.val() === ''){
        ele_pp_opt.val('bottom');
    };
});

// cqi
ele_cqi_addbtn.on('click',()=>{
    let val = ele_cqi_input.val();
    if (val){
        //let html = `<mdui-list-item nonclickable>${val}<mdui-button-icon slot="end-icon" icon="close"></mdui-button-icon></mdui-list-item>`;
        let html = `<mdui-list-item nonclickable>${val}</mdui-list-item>`;
        let del_btn = `<mdui-button-icon slot="end-icon" icon="close"></mdui-button-icon>`;
        del_btn = $(del_btn);
        del_btn.on('click',function(){
            $(this).parent().remove();
        });
        html = $(html).append(del_btn);
        ele_cqi_list.append(html);
        ele_cqi_input.val('');
    };
});
// cjsp
ele_cjsp_addbtn.on('click',()=>{
    let val = ele_cjsp_input.val();
    if (val){
        //let html = `<mdui-list-item nonclickable>${val}<mdui-button-icon slot="end-icon" icon="close"></mdui-button-icon></mdui-list-item>`;
        let html = `<mdui-list-item nonclickable>${val}</mdui-list-item>`;
        let del_btn = `<mdui-button-icon slot="end-icon" icon="close"></mdui-button-icon>`;
        del_btn = $(del_btn);
        del_btn.on('click',function(){
            $(this).parent().remove();
        });
        html = $(html).append(del_btn);
        ele_cjsp_list.append(html);
        ele_cjsp_input.val('');
    };
});
// up
ele_up_addingbtn.on('click',()=>{
    ele_up_adddialog.attr('open',true);
});
ele_up_addbtn.on('click',()=>{
    ele_up_adddialog.removeAttr('open');
    if (ele_up_type.val() === 'cmd'){
        ele_up_tbody.append(`<tr>
            <td>cmd</td>
            <td>${ele_up_name.val()}</td>
            <td>${ele_up_icon.val()}</td>
            <td>${ele_up_if.val()}</td>
            <td>${ele_up_command.val()}</td>
            <td></td>
        </tr>`);
    } else {
        ele_up_tbody.append(`<tr>
            <td>pwa</td>
            <td>${ele_up_name.val()}</td>
            <td>${ele_up_icon.val()}</td>
            <td></td>
            <td></td>
            <td>${ele_up_url.val()}</td>
        </tr>`);
    };
});
$('.up-pwa-part').hide();
ele_up_type.on('change',()=>{
    let val = ele_up_type.val();
    if (val == ''){
        val = 'cmd';
        ele_up_type.val(val);
    };
    if (val === 'cmd'){
        $('.up-cmd-part').show();
        $('.up-pwa-part').hide();
    }else{
        $('.up-cmd-part').hide();
        $('.up-pwa-part').show();
    };
});

// edit path btns
ele_sspath_btn.on('click',()=>{
    prompt({
        headline: config.app_settings.Chinese ? '填写截图保存路径' : 'Enter screenshot save path',
        description: config.app_settings.Chinese ? '留空则在截图后弹出窗口选择，另外我懒得在这写检测了' : 'Leave it blank to select the path after taking a screenshot, and lazy to write the detection code',
        confirmText: config.app_settings.Chinese ? '确定' : 'Confirm',
        cancelText: config.app_settings.Chinese ? '取消' : 'Cancel',
        onConfirm: (path) => {
            ele_sspath_span.text(path);
        },
        onCancel: () => {console.log('canceled')}, // 你妈的Cancel为什么还要Reject一下啊
    });
});
ele_gtm_btn.on('click',()=>{
    prompt({
        headline: config.app_settings.Chinese ? '填写谷歌翻译镜像网站链接' : 'Enter Google Translate Mirror URL',
        description: config.app_settings.Chinese ? '留空则不启用该功能' : 'Leave it blank to disable this feature',
        confirmText: config.app_settings.Chinese ? '确定' : 'Confirm',
        cancelText: config.app_settings.Chinese ? '取消' : 'Cancel',
        onConfirm: (url) => {
            ele_gtm_span.text(url);
        },
        onCancel: () => {console.log('canceled')},
    });
});

function init_config(){
    ele_lang_opt.val(config.app_settings.Chinese ? 'true' : 'false');
    //ele_lm_opt.val(config.app_settings.light_dark);
    if (config.app_settings.light_dark == ''){
        ele_lm_opt.val('auto');
    }else{
        ele_lm_opt.val(config.app_settings.light_dark);
    };
    ele_pp_opt.val(config.app_settings.panel_place);
    ele_sspath_span.text(config.default_plugin_settings.screenshot_save_path);
    ele_gtm_span.text(config.default_plugin_settings.google_translate_mirror);
    if(config.default_tools.includes('screenshot')){
        ele_openss.attr('checked',true);
    };
    if(config.default_tools.includes('translate')){
        ele_opentl.attr('checked',true);
    };
    if(config.default_tools.includes('cliprecog')){
        ele_opencr.attr('checked',true);
    };

    for (let i = 0; i < config.default_plugin_settings.clip_quickinput.length; i++){
        let val = config.default_plugin_settings.clip_quickinput[i];
        let html = `<mdui-list-item nonclickable>${val}</mdui-button-icon></mdui-list-item>`;
        let del_btn = `<mdui-button-icon slot="end-icon" icon="close"></mdui-button-icon>`;
        del_btn = $(del_btn);
        del_btn.on('click',function(){
            $(this).parent().remove();
        });
        html = $(html).append(del_btn);
        ele_cqi_list.append(html);
    };
    for (let i = 0; i < config.plugin_tools.length; i++){
        let val = config.plugin_tools[i];
        let html = `<mdui-list-item nonclickable>${val}</mdui-button-icon></mdui-list-item>`;
        let del_btn = `<mdui-button-icon slot="end-icon" icon="close"></mdui-button-icon>`;
        del_btn = $(del_btn);
        del_btn.on('click',function(){
            $(this).parent().remove();
        });
        html = $(html).append(del_btn)
        ele_cjsp_list.append(html);
    };
    for (let i = 0; i < config.custom_tools.length; i++){
        let val = config.custom_tools[i];
        if (val.type === 'cmd'){
            ele_up_tbody.append(`<tr>
                <td>cmd</td>
                <td>${val.name}</td>
                <td>${val.icon}</td>
                <td>${val.if}</td>
                <td>${val.command}</td>
                <td></td>
            </tr>`);
        } else {
            ele_up_tbody.append(`<tr>
                <td>pwa</td>
                <td>${val.name}</td>
                <td>${val.icon}</td>
                <td></td>
                <td></td>
                <td>${val.url}</td>
            </tr>`);
        };
    };
};

ele_savebtn.on('click',() => {
    let lang = ele_lang_opt.val() === 'true' ? true : false;
    let lm = ele_lm_opt.val();
    let pp = ele_pp_opt.val();
    let sspath = ele_sspath_span.text();
    let gtm = ele_gtm_span.text();
    let df_tools = [];
    if(ele_openss.attr('checked')){
        df_tools.push('screenshot');
    };
    if(ele_opentl.attr('checked')){
        df_tools.push('translate');
    };
    if(ele_opencr.attr('checked')){
        df_tools.push('cliprecog');
    };
    let cqi = [];
    ele_cqi_list.children().each(function(){
        cqi.push($(this).text());
    });
    let cjsp = [];
    ele_cjsp_list.children().each(function(){
        cjsp.push($(this).text());
    });
    let up_list = [];
    ele_up_tbody.children().each(function(){
        let type = $(this).find('td:eq(0)').text();
        let name = $(this).find('td:eq(1)').text();
        let icon = $(this).find('td:eq(2)').text();
        let if_ = $(this).find('td:eq(3)').text();
        let command = $(this).find('td:eq(4)').text();
        let url = $(this).find('td:eq(5)').text();
        if (type === 'cmd'){
            up_list.push({
                type: 'cmd',
                name: name,
                icon: icon,
                if: if_,
                command: command,
            });
        } else {
            up_list.push({
                type: 'pwa',
                name: name,
                icon: icon,
                url: url,
            });
        };
    });
    
    let new_config = {
        app_settings: {
            Chinese: lang,
            light_dark: lm,
            panel_place: pp,
        },
        default_plugin_settings: {
            screenshot_save_path: sspath,
            google_translate_mirror: gtm,
            clip_quickinput: cqi,
        },
        default_tools: df_tools,
        plugin_tools: cjsp,
        custom_tools: up_list,
    };
    console.log(new_config);
    ipcRenderer.send('save_settings', new_config);
});