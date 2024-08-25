const { app, BrowserWindow,
    Tray, Menu, nativeImage,
    ipcMain, globalShortcut,
    dialog, clipboard,
    shell, nativeTheme,
} = require('electron');
const fs = require('fs');
const path = require('path');
const robot = require('robotjs');
const { PNG } = require('pngjs');
const { exec } = require('child_process');

// Tray
let tray = null;
function create_tray() {
    tray = new Tray(nativeImage.createFromPath('src/icon.png'));
    const contextMenu = Menu.buildFromTemplate([
        { label: config.app_settings.Chinese ? '切换大小锁定状态' : 'Toggle Caps Lock Status', click: toggle_caps_status },
        { label: config.app_settings.Chinese ? '设置' : 'Settings', click: show_settings },
        { label: config.app_settings.Chinese ? '退出' : 'Exit', click: app.quit }
    ]);
    tray.setToolTip('CapsTools');
    tray.setContextMenu(contextMenu);
};

// Main Window
let main_window = null;
function create_main_window(){
    main_window = new BrowserWindow({
        frame: false,
        transparent: true,
        alwaysOnTop: true,
        resizable: false,
        show: false,
        fullscreen: true,
        disableAutoHideCursor: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            //sandbox: false
        }
    });
    main_window.loadFile('renderer.html');
    main_window.setSkipTaskbar(true);
    main_window.setVisibleOnAllWorkspaces(false);
    //main_window.webContents.openDevTools();//
};

// Caps Lock Listener
var caps_status = false;
function create_caps_listener(){
    globalShortcut.register('CapsLock', async()=>{
        caps_status = !caps_status;
        if(caps_status){
            main_window.webContents.send('reflash', {config: config, cjs_plugin: cjs_plugins_list});
            main_window.show();
        }else{
            main_window.webContents.send('hide');
            main_window.hide();
        };
    });
};
async function toggle_caps_status(){
    caps_status = !caps_status;
    if(caps_status){
        main_window.webContents.send('reflash', {config: config, cjs_plugin: cjs_plugins_list});
        main_window.show();
    }else{
        main_window.webContents.send('hide');
        main_window.hide();
    };
};

// Settings
function show_settings(){}; //TODO:

// Screenshot
ipcMain.on('screenshot',(event)=>{
    let wait_interval = setInterval(()=>{
        if (!caps_status) {
            clearInterval(wait_interval);
            let shot = get_screenshot().buffer;
            if (config.default_plugin_settings.screenshot_save_path){
                let filePath = config.default_plugin_settings.screenshot_save_path;
                if (!filePath.endsWith(path.sep)){filePath = filePath + path.sep};
                filePath = filePath + `screenshot_${Date.now()}.png`;
                fs.writeFile(filePath, shot, (err) => {
                    if (err) {
                        dialog.showErrorBox('Error', err.toString());
                    };
                });
            } else {
                dialog.showSaveDialog({
                    title: config.app_settings.Chinese ? '保存截图' : 'Save Screenshot',
                    defaultPath: `screenshot_${Date.now()}.png`,
                    filters: [
                        { name: 'PNG', extensions: ['png'] }
                    ]
                }).then((res) => {
                    if (res.filePath) {
                        fs.writeFile(res.filePath, shot, (err) => {
                            if (err) {
                                dialog.showErrorBox('Error', err);
                            };
                        });
                    };
                });
            };
        };
    },100);
});

function get_screenshot(){
    let screenshot = robot.screen.capture();
    shot = screenshot.image; // buffer
    let size = robot.getScreenSize();
    let pngdata = new PNG({width: size.width, height: size.height});
    // robotjs返回的图片是bgra的
    for (let i = 0; i < shot.length; i += 4) {
        [shot[i], shot[i+2]] = [shot[i+2], shot[i]];
    };
    pngdata.data = Buffer.from(shot);
    let bufferdata = PNG.sync.write(pngdata);
    return {origin: shot, buffer: bufferdata};
    // Claude 3.5 Sonnet 给的，buffer->png->buffer
};

// translate
ipcMain.on('translate',(event,message)=>{
    let translate_window = new BrowserWindow({
        title: config.app_settings.Chinese ? '翻译' : 'Translate',
        show: false,
        frame: true,
        autoHideMenuBar: true,
        icon: 'src/icon.png',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
            webviewTag: true
        }
    });
    translate_window.loadFile('default_plugins/translate/tl.html');
    //translate_window.webContents.openDevTools();
    translate_window.webContents.on('did-finish-load', () => {
        translate_window.show();
        translate_window.webContents.send('translate', {message: message, config: config});
    });
});

// cliprecog & clipboard
var clip_history = [];
function is_obj_equal(obj1, obj2){
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
var add_clip_interval = setInterval(()=>{
    if ('default_tools' in config){
        clearInterval(add_clip_interval);
        if (config.default_tools.includes('cliprecog')) {
            setInterval(()=>{
                let now_clip = {text: null, html: null, image: null};
                now_clip.text = clipboard.readText();
                now_clip.html = clipboard.readHTML();
                let now_clip_img = clipboard.readImage();
                if (!now_clip_img.isEmpty()){
                    now_clip.image = now_clip_img;
                };
                if (clip_history.length === 0){
                    clip_history.push(now_clip);
                } else if (! is_obj_equal(now_clip, clip_history[0])){
                    for (let i = 0; i < clip_history.length; i++){
                        if (is_obj_equal(now_clip, clip_history[i])){
                            clip_history.splice(i, 1);
                            break;
                        };
                    };
                    clip_history.unshift(now_clip);
                    //console.log(clip_history);
                };
            },1000);
        };
    } else {
        clearInterval(add_clip_interval);
    };
}, 100);
ipcMain.on('cliprecog',(event)=>{
    let clip_window = new BrowserWindow({
        title: config.app_settings.Chinese ? '剪贴板' : 'Clipboard',
        show: false,
        frame: true,
        autoHideMenuBar: true,
        fullscreenable: false,
        maximizable: false,
        icon: 'src/icon.png',
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            contextIsolation: false,
        },
        width: 290,
        height: 580,
        x: 100,
        y: 100,
    });
    clip_window.loadFile('default_plugins/clip/clip.html');
    //clip_window.webContents.openDevTools();//
    clip_window.webContents.on('did-finish-load', () => {
        clip_window.show();
        clip_window.webContents.send('open_clip', {clip_history: clip_history, config: config});
    });
});
ipcMain.handle('get_clip',async(e)=>{
    return clip_history;
});
ipcMain.on('changed_clip', (e,new_history) => {
    clip_history = new_history;
});
ipcMain.on('save_text',(event,obj)=>{
    dialog.showSaveDialog({
        title: config.app_settings.Chinese ? '保存文本' : 'Save Text',
        defaultPath: `text_${Date.now()}.txt`,
        filters: [
            { name: 'Text', extensions: ['txt'] },
            { name: 'HTML', extensions: ['html'] },
        ]
    }).then((res)=>{
        if(res.filePath){
            if(path.extname(res.filePath) === '.txt'){
                fs.writeFile(res.filePath, obj.text, 'utf-8', (err)=>{console.error(err)});
            } else if(path.extname(res.filePath) === '.html'){
                fs.writeFile(res.filePath, obj.html, 'utf-8', (err)=>{console.error(err)});
            };
        }
    });
});
ipcMain.on('translate_text',(event,text)=>{
    let translate_window = new BrowserWindow({title: config.app_settings.Chinese ? '翻译' : 'Translate',show: false,frame: true,autoHideMenuBar: true,icon: 'src/icon.png', webPreferences: {nodeIntegration: true,enableRemoteModule: true,contextIsolation: false,webviewTag: true}});translate_window.loadFile('default_plugins/translate/tl.html');translate_window.webContents.on('did-finish-load', () => {translate_window.show();
    translate_window.webContents.send('translate', {message: {from: 'cn', to: 'en', text: text}, config: config});});
});
ipcMain.on('save_image',(e,nimg)=>{
    dialog.showSaveDialog({
        title: config.app_settings.Chinese ? '保存图片' : 'Save Image',
        defaultPath: `image_${Date.now()}.png`,
        filters: [
            { name: 'PNG', extensions: ['png'] }
        ]
    }).then((res)=>{
        if(res.filePath){
            let img_data = nimg.toPNG();
            fs.writeFile(res.filePath, img_data, (err)=>{console.error(err)});
        }
    });
});



function check_file_ability(file_path){
    try{
        fs.accessSync(file_path, fs.constants.R_OK);
        return true;
    } catch (error) {
        return false;
    };
};
ipcMain.handle('check_svg',(e,svg_path)=>{
    if(check_file_ability(svg_path)){
        let content = fs.readFileSync(svg_path, 'utf-8');
        if(content.startsWith('<svg')){
            return [true,content];
        } else {
            return false;
        };
    } else {
        return false;
    };
});
ipcMain.handle('check_img',(e,img_path)=>{
    if(check_file_ability(img_path)){
        return true;
    } else {
        return false;
    };
});
ipcMain.on('run_cmd',(e,cmd_str)=>{
    exec(cmd_str, (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error) {
            console.error(`exec error: ${error}`);
        };
    });
});
ipcMain.on('open_pwa',(e,url)=>{
    open_pwa(url);
});
function open_pwa(url){
    let pwa_window = new BrowserWindow({
        autoHideMenuBar: true,
        show: true,
    });
    pwa_window.loadURL(url);
    pwa_window.webContents.setWindowOpenHandler((details)=>{
        if (details.url){
            open_pwa(details.url);
        };
        return {action: 'deny'};
    });
    Menu.setApplicationMenu(Menu.buildFromTemplate([
        { label: config.app_settings.Chinese ? '操作' : 'Actions', submenu: [
            { label: config.app_settings.Chinese ? '刷新' : 'Refresh', click: (item,focusedWindow) => { focusedWindow.reload(); } },
            { label: config.app_settings.Chinese ? '浏览器打开' : 'Open in Browser', click: (item,focusedWindow) => { shell.openExternal(focusedWindow.getURL()); } },
            { label: config.app_settings.Chinese ? '关闭' : 'Close', click: (item,focusedWindow) => { focusedWindow.close(); } }
        ] }
    ]));
};

var cjs_plugins_list = [];
var cjs_plugins_func = [];
function process_cjsplugins(){
    let plugin_config = config.plugin_tools;
    for (let i = 0; i < plugin_config.length; i++){
        let plugin_path = plugin_config[i];
        let plugin = require(plugin_path).default;
        cjs_plugins_list.push({
            "index": i,
            "name": plugin.name,
            "icon": plugin.icon,
        });
        cjs_plugins_func.push(plugin.func);
    }
};
ipcMain.on('run_cjs_plugin',(e,index)=>{
    cjs_plugins_func[index]();
});










// no repeat
const sil = app.requestSingleInstanceLock();
if (!sil) {
    app.quit();
} else {
    app.on('second-instance', (event, commandLine, workingDirectory) => {
        if (main_window) {
            if (main_window.isMinimized()) main_window.restore();
            main_window.focus();
        }
    });
};

// Config
var config = {};
function read_config(){
    let config_file_path = path.join(app.getAppPath(), 'config.json');
    try{
        if(fs.existsSync(config_file_path)){
            config = JSON.parse(fs.readFileSync(config_file_path, 'utf-8'));
        }else{
            write_config();
        };
    } catch (error) {
        console.log(error);
        write_config();
    };
};
function write_config(config){
    let config_file_path = path.join(app.getAppPath(), 'config.json');
    if(config){
        fs.writeFileSync(config_file_path, JSON.stringify(config), 'utf-8');
    }else{
        config = {"custom_tools": [],"plugin_tools": [],"default_tools": ["screenshot","translate","cliprecog"],"default_plugin_settings": {"google_translate_mirror": "https://translate.yunkuerp.cn/","clip_quickinput": []},"app_settings": {"panel_place": "bottom","Chinese": false,"light_dark": "auto"}};
        fs.writeFileSync(config_file_path, JSON.stringify(config), 'utf-8');
    };
};
read_config();
if(config.app_settings.light_dark != 'light' && config.app_settings.light_dark != 'dark'){
    config.app_settings.light_dark = nativeTheme.shouldUseDarkColors ? 'dark' : 'light';
};
process_cjsplugins();

// App
app.on('ready',()=>{
    create_tray();
    create_main_window();
    create_caps_listener();

    if(process.argv.includes('--pwa')){
        let pwa_url = process.argv[process.argv.indexOf('--pwa')+1];
        open_pwa(pwa_url);
    };
});
app.on('will-quit',()=>{
    globalShortcut.unregisterAll();
});