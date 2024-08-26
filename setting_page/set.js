const { ipcRenderer } = require('electron');
const { setColorScheme, setTheme } = require('../src/mdui.cjs');
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
        ele_lm_opt.val('light');
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
        del_btn = $(del_btn)
        del_btn.on('click',function(){
            $(this).parent().remove();
        });
        html = $(html).append(del_btn)
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
        del_btn = $(del_btn)
        del_btn.on('click',function(){
            $(this).parent().remove();
        });
        html = $(html).append(del_btn)
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

function init_config(){} //TODO:

ele_savebtn.on('click',() => {}); //TODO: