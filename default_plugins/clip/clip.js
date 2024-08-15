const { ipcRenderer, clipboard } = require('electron');
const { setColorScheme } = require('../../src/mdui.cjs');
const $ = require('jquery');

setColorScheme('#EEE444');

const ele_cliplist = $('.clip-list');
const ele_syncbtn = $('.sync-history');
const ele_clearbtn = $('.clear-history');
const ele_texta = $('.text-actions');
const ele_imga = $('.img-actions');
const ele_tshow = $('.text-show');
const ele_tsave = $('.text-save');
const ele_ttl = $('.text-translate');
const ele_tdelete = $('.text-delete');
const ele_isave = $('.img-save');
const ele_idelete = $('.img-delete');
const ele_showtext = $('.show-text');
const ele_quickarea = $('.quick-area');


var clip_history = [];
ipcRenderer.on('open_clip', (e, data) => {
    clip_history = data.clip_history;
    const config = data.config;
    if (!config.app_settings.Chinese){
       $('*').each(function(){
            if ($(this).attr('data-entext')) {
                $(this).text($(this).attr('data-entext'));
           };
       });
    };
    if (clip_history.length > 0){
        reflash_clip_list(clip_history);
    };
    if (config.default_plugin_settings.clip_quickinput.length > 0){
        for (let i = 0; i < config.default_plugin_settings.clip_quickinput.length; i++){
            let html = `<mdui-chip>${config.default_plugin_settings.clip_quickinput[i]}</mdui-chip>`
            let ele_to_add = $(html);
            ele_to_add.on('click',function(){
                clipboard.writeText(config.default_plugin_settings.clip_quickinput[i]);
            });
            ele_quickarea.append(ele_to_add);
        };
    }
});

ele_syncbtn.on('click', async () => {
    clip_history = await ipcRenderer.invoke('get_clip');
    reflash_clip_list();
});
ele_clearbtn.on('click', () => {
    clip_history = [];
    changed_history();
    ele_cliplist.empty();
});
function changed_history(){
    ipcRenderer.send('changed_clip', clip_history);
};

function reflash_clip_list(){
    ele_cliplist.empty();
    for (let i = 0; i < clip_history.length; i++){
        let thisclip = clip_history[i];
        if (thisclip.image !== null){
            let img = thisclip.image;
            img = img.resize({width: 60});
            img = img.toDataURL();
            let img_html = `<img height="60" src="${img}">`;
            let html = `<mdui-card class="clip-item clip-item-special" variant="outlined" clickable>${img_html}</mdui-card>`;
            let ele_to_add = $(html);
            ele_to_add.data('obj', thisclip);
            ele_to_add.on('click',item_click);
            ele_to_add.on('contextmenu',item_contextmenu);
            ele_cliplist.append(ele_to_add);
        } else if (thisclip.html !== '') {
            let html = `<mdui-card class="clip-item clip-item-special" variant="outlined" clickable>${thisclip.html}</mdui-card>`;
            let ele_to_add = $(html);
            ele_to_add.data('obj', thisclip);
            ele_to_add.on('click',item_click);
            ele_to_add.on('contextmenu',item_contextmenu);
            ele_cliplist.append(ele_to_add);
        } else {
            let html = `<mdui-card class="clip-item" variant="outlined" clickable><span>${thisclip.text}</span></mdui-card>`;
            let ele_to_add = $(html);
            ele_to_add.data('obj', thisclip);
            ele_to_add.on('click',item_click);
            ele_to_add.on('contextmenu',item_contextmenu);
            ele_cliplist.append(ele_to_add);
        };
    };
};

function item_click(){
    let thisclip = $(this).data('obj');
    if (thisclip.image !== null){
        clipboard.writeImage(thisclip.image);
    } else if (thisclip.html !== '' && thisclip.text !== '') {
        clipboard.write({text: thisclip.text, html: thisclip.html});
    } else if (thisclip.html !== '') {
        clipboard.writeHTML(thisclip.html);
    } else {
        clipboard.writeText(thisclip.text);
    };
};
var editing_clip = {};
function item_contextmenu(){
    editing_clip = $(this).data('obj');
    if (editing_clip.image !== null){
        ele_imga.attr('open',true);
    } else if (editing_clip.html !== '' || editing_clip.text !== '') {
        ele_texta.attr('open',true);
    };
};
function is_clip_equal(obj1, obj2){
    if(obj1.text === obj2.text && obj1.html === obj2.html){
        if (obj1.image === null && obj2.image === null){
            return true;
        } else if (obj1.image.toDataURL() === obj2.image.toDataURL()){
            return true;
        };
        return false;
    }else{
        return false;
    };
};
function find_clip_index(clip){
    for (let i = 0; i < clip_history.length; i++){
        if (is_clip_equal(clip, clip_history[i])){
            return i;
        };
    };
};
ele_tshow.on('click',()=>{
    let text_to_show = '';
    if (editing_clip.text !== ''){
        text_to_show += 'Text:\n';
        text_to_show += editing_clip.text;
        text_to_show += '\n\n';
    };
    if (editing_clip.html !== ''){
        text_to_show += 'HTML:\n';
        text_to_show += editing_clip.html;
    };
    ele_showtext.text(text_to_show);
    ele_showtext.attr('open',true);
});
ele_tsave.on('click',()=>{
    ipcRenderer.send('save_text', editing_clip);
});
ele_ttl.on('click',()=>{
    ipcRenderer.send('translate_text', editing_clip.text);
});
ele_tdelete.on('click',()=>{
    let index = find_clip_index(editing_clip);
    clip_history.splice(index, 1);
    changed_history();
    reflash_clip_list();
    ele_texta.removeAttr('open');
});
ele_idelete.on('click',()=>{
    let index = find_clip_index(editing_clip);
    clip_history.splice(index, 1);
    changed_history();
    reflash_clip_list();
    ele_imga.removeAttr('open');
});
ele_isave.on('click',()=>{
    ipcRenderer.send('save_image', editing_clip.image);
});