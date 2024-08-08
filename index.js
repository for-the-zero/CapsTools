const { app, BrowserWindow,
    Tray, Menu, nativeImage,
    ipcMain, globalShortcut,
    dialog
} = require('electron');
const fs = require('fs');
const path = require('path');
//const process = require('process'); console.log(process.versions);
const robot = require('robotjs');

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
            sandbox: false
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
            main_window.setFullScreen(true);
            main_window.webContents.send('reflash', {config: config});
            main_window.show();
        }else{
            main_window.webContents.send('hide');
            main_window.hide();
            main_window.setFullScreen(false);
        };
    });
};
async function toggle_caps_status(){
    caps_status = !caps_status;
    if(caps_status){
        main_window.setFullScreen(true);
        main_window.webContents.send('reflash', {config: config});
        main_window.show();
    }else{
        main_window.webContents.send('hide');
        main_window.hide();
        main_window.setFullScreen(false);
    };
};

function show_settings(){}; //TODO:

ipcMain.on('screenshot',(event)=>{
    let wait_interval = setInterval(()=>{
        if (!caps_status) {
            clearInterval(wait_interval);
            let shot_base64 = get_screenshot();
            if (config.default_plugin_settings.screenshot_save_path){
                //TODO:
            } else {
                dialog.showSaveDialog({
                    title: config.app_settings.Chinese ? '保存截图' : 'Save Screenshot',
                    defaultPath: `screenshot_${Date.now()}.png`,
                    filters: [
                        { name: 'PNG', extensions: ['png'] }
                    ]
                }, (filePath) => {
                    if (filePath) {
                        fs.writeFile(filePath, shot_base64, 'base64', (err) => {
                            if (err) {
                                dialog.showErrorBox('Error', err);
                            } else {
                                console.log('Screenshot saved successfully');
                            };
                        });
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
    return base64data;
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