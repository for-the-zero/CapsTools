const { app, BrowserWindow,
    Tray, Menu, nativeImage,
    ipcMain, globalShortcut, desktopCapturer,
} = require('electron');
const fs = require('fs');
const path = require('path');

//Tray
let tray = null;
function create_tray() {
    tray = new Tray(nativeImage.createFromPath('src/icon.png'));
    const contextMenu = Menu.buildFromTemplate([
        { label: '切换大小锁定状态', click: toggle_caps_status },
        { label: '设置', click: show_settings },
        { label: '退出', click: app.quit }
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
            contextIsolation: false
        }
    });
    main_window.loadFile('renderer.html');
    main_window.setSkipTaskbar(true);
    main_window.setVisibleOnAllWorkspaces(false);
    //main_window.webContents.openDevTools();
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