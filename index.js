const { app, BrowserWindow,
    Tray, Menu, nativeImage,
    ipcMain, globalShortcut,
    dialog
} = require('electron');
const fs = require('fs');
const path = require('path');
const robot = require('robotjs');
const { PNG } = require('pngjs');

//Tray
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

//Main Window
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
    main_window.webContents.openDevTools();//
};

//Caps Lock Listener
var caps_status = false;
function create_caps_listener(){
    globalShortcut.register('CapsLock', async()=>{
        caps_status = !caps_status;
        if(caps_status){
            main_window.webContents.send('reflash', {config: config});
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
        main_window.webContents.send('reflash', {config: config});
        main_window.show();
    }else{
        main_window.webContents.send('hide');
        main_window.hide();
    };
};

function show_settings(){}; //TODO:

ipcMain.on('screenshot',(event)=>{
    let wait_interval = setInterval(()=>{
        if (!caps_status) {
            clearInterval(wait_interval);
            let shot = get_screenshot()['png'];
            if (config.default_plugin_settings.screenshot_save_path){
                //TODO:
            } else {
                dialog.showSaveDialog({
                    title: config.app_settings.Chinese ? '保存截图' : 'Save Screenshot',
                    defaultPath: `screenshot_${Date.now()}.png`,
                    filters: [
                        { name: 'PNG', extensions: ['png'] }
                    ]
                }).then((res) => {
                    /*if (res.filePath) {
                        if (shot) {console.log(shot);} else {console.log('No screenshot data');};
                        fs.writeFile(res.filePath, shot, (err) => {
                            if (err) {
                                dialog.showErrorBox('Error', err);
                            } else {
                                console.log('Screenshot saved successfully');
                            };
                        });
                    };*/
                    if (res.filePath) {
                        shot.pipe(fs.createWriteStream(res.filePath));
                        console.log('Screenshot saved successfully');
                    };
                });
            };
        };
    },100);
});

function get_screenshot(){
    let shot = robot.screen.capture();
    shot = shot.image; // buffer
    let base64data = shot.toString('base64');
    let size = robot.getScreenSize();
    let pngdata = new PNG({width: size.width, height: size.height});
    for (let y; y < pngdata.height; y++) {
        for (let x; x < pngdata.width; x++) {
            //let idx = (pngdata.width * y + x) * 4;
            let idx = (pngdata.width * y + x) * 3;
            let r = shot[idx];
            let g = shot[idx+1];
            let b = shot[idx+2];
            //let a = shot[idx+3];
            pngdata.data[idx] = b;
            pngdata.data[idx+1] = g;
            pngdata.data[idx+2] = r;
            //pngdata.data[idx+3] = a;
            pngdata.data[idx+3] = 255;
        };
    };
    return {buffer: shot, base64: base64data, png: pngdata.pack()};
};







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
        config = {
            "collected_tools_id": [],
            "costom_tools": [],
            "plugin_tools": [],
            "default_plugin_settings": {},
            "app_settings": {
                "panel_place": "bottom"
            }
        };
        fs.writeFileSync(config_file_path, JSON.stringify(config), 'utf-8');
    };
};
read_config();

app.on('ready',()=>{
    create_tray();
    create_main_window();
    create_caps_listener();
});
app.on('will-quit',()=>{
    globalShortcut.unregisterAll();
});