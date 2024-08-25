const { ipcRenderer } = require('electron');
const { setColorScheme, setTheme } = require('../../src/mdui.cjs');
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
const ele_sync_btn = $('.sync-btn');
const ele_tlinput = $('.translate-input');
const ele_slang = $('.source-lang');
const ele_tlang = $('.target-lang');

$('mdui-tab').on('click',()=>{
    setInterval(()=>{
        if (ele_tabs.val() == 'native-tab'){
            ele_ntab.show();
        } else {
            ele_ntab.hide();
        };
    },100);
});

let langlist = ['zh', 'en', 'ja', 'ko', 'fr', 'es', 'ru']
ele_slang.on('change',()=>{
    if (ele_slang.val() == ''){
        ele_slang.val(langlist.at(0));
    };
    if (ele_slang.val() == ele_tlang.val()){
        ele_tlang.val(langlist.at(langlist.indexOf(ele_slang.val())-1));
    };
});
ele_tlang.on('change',()=>{
    if (ele_tlang.val() == ''){
        ele_tlang.val(langlist.at(1));
    };
    if (ele_slang.val() == ele_tlang.val()){
        ele_slang.val(langlist.at(langlist.indexOf(ele_tlang.val())-1));
    };
});

ipcRenderer.on('translate', (event, data) => {
    message = data.message;
    config = data.config;

    setTheme(config.app_settings.light_dark);
    if (!config.app_settings.Chinese){
        $('*').each(function(){
            if ($(this).attr('data-entext')) {
                $(this).text($(this).attr('data-entext'));
            };
        });
    };

    ele_google_webview.attr('src', `https://translate.google.com/`);
    ele_deepl_webview.attr('src', `https://www.deepl.com/translator`);
    ele_bing_webview.attr('src', `https://www.bing.com/translator`);
    ele_tx_webview.attr('src', `https://transmart.qq.com/`);
    ele_bd_webview.attr('src', `https://fanyi.baidu.com/`);
    if (config.default_plugin_settings.google_translate_mirror){
        ele_gmirror_webview.attr('src', config.default_plugin_settings.google_translate_mirror);
    } else {
        ele_gmirror_webview.hide();
    };

    if (message != {from:'',to:'',text:''}){
        ele_tlinput.val(message.text);
        ele_slang.val(message.from);
        ele_tlang.val(message.to);
        sync_to_webpages(message.from, message.to, message.text);
    };
});

ele_sync_btn.on('click',()=>{
    sync_to_webpages(ele_slang.val(), ele_tlang.val(), ele_tlinput.val());
});

function sync_to_webpages(slang, tlang, text){
    /*
    input: zh en ja ko fr es ru
    !google:
    url?sl=${slang}&tl=${tlang}&text=${text}&op=translate
    zh-CN en ja ko fr es ru
    !deepl:
    https://www.deepl.com/zh/translator#${slang}/${tlang}/${text}
    zh-Hans en ja ko fr es ru
    bing:
    https://www.bing.com/translator?from=${slang}&to=${tlang}&text=${text}
    zh en ja ko fr es ru
    tx:
    https://transmart.qq.com/zh-CN/index?sourcelang=${slang}&targetlang=${tlang}&&source=${text}
    zh en ja ko fr es ru
    baidu:
    https://fanyi.baidu.com/mtpe-individual/multimodal?query=${text}&lang=${slang}2${tlang}
    zh en ja ko fr es ru
    */
    function convert_lang_code(code,platform){
        if (platform == 'google'){
            if (code == 'zh'){
                return 'zh-CN';
            } else {
                return code;
            };
        };
        if (platform == 'deepl'){
            if (code == 'zh'){
                return 'zh-Hans';
            } else {
                return code;
            };
        };
    };
    let google_url = `?sl=${convert_lang_code(slang,'google')}&tl=${convert_lang_code(tlang,'google')}&text=${encodeURIComponent(text)}&op=translate`;
    let deepl_url = `https://www.deepl.com/zh/translator#${convert_lang_code(slang,'deepl')}/${convert_lang_code(tlang,'deepl')}/${encodeURIComponent(text)}`;
    let bing_url = `https://www.bing.com/translator?from=${slang}&to=${tlang}&text=${encodeURIComponent(text)}`;
    let tx_url = `https://transmart.qq.com/zh-CN/index?sourcelang=${slang}&targetlang=${tlang}&&source=${encodeURIComponent(text)}`;
    let baidu_url = `https://fanyi.baidu.com/mtpe-individual/multimodal?query=${encodeURIComponent(text)}&lang=${slang}2${tlang}`;
    //console.log(google_url, deepl_url, bing_url, tx_url, baidu_url);
    //debugger;
    // WARN: `from` in bing may not work
    
    ele_google_webview.attr('src', `https://translate.google.com/${google_url}`);
    ele_deepl_webview.attr('src', deepl_url);
    ele_bing_webview.attr('src', bing_url);
    ele_tx_webview.attr('src', tx_url);
    ele_bd_webview.attr('src', baidu_url);
    if (config.default_plugin_settings.google_translate_mirror){
        ele_gmirror_webview.attr('src', `${config.default_plugin_settings.google_translate_mirror}${google_url}`);
    };
    
};