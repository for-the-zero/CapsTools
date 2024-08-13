const { ipcRenderer } = require('electron');
const { setColorScheme } = require('../../src/mdui.cjs');
const $ = require('jquery');

setColorScheme('#00CCFF');
var message = {};
var config = {};

const ele_tabs = $('.tabs');
const ele_ntab = $('.native-tab');
const ele_google_webview = $('.google-webview');
const ele_gmirror_webview = $('.gmirror-webview');
const ele_deepl_webview = $('.deepl-webview');
const ele_bing_webview = $('.bing-webview');
const ele_tx_webview = $('.tx-webview');
const ele_bd_webview = $('.baidu-webview');

$('mdui-tab').on('click',()=>{
    setInterval(()=>{
        if (ele_tabs.val() == 'native-tab'){
            ele_ntab.show();
        } else {
            ele_ntab.hide();
        };
    },100);
});


ipcRenderer.on('translate', (event, data) => {
    message = data.message;
    config = data.config;

    if (!config.app_settings.Chinese){
       $('*').each(function(){
            if ($(this).attr('data-entext')) {
                $(this).text($(this).attr('data-entext'));
           };
       });
    };

    ele_google_webview.attr('src', `https://translate.google.com/`);
    ele_gmirror_webview.attr('src', ``);
    ele_deepl_webview.attr('src', `https://www.deepl.com/translator`);
    ele_bing_webview.attr('src', `https://www.bing.com/translator`);
    ele_tx_webview.attr('src', `https://transmart.qq.com/`);
    ele_bd_webview.attr('src', `https://fanyi.baidu.com/`);
});

