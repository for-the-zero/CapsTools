const { app, BrowserWindow,
    Tray, Menu, nativeImage,
    ipcMain, globalShortcut, desktopCapturer
} = require('electron');

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
    main_window.webContents.openDevTools();
};

//Caps Lock Listener
var caps_status = false;
function create_caps_listener(){
    globalShortcut.register('CapsLock', async()=>{
        caps_status = !caps_status;
        if(caps_status){
            main_window.webContents.send('reflash', {screenshot: await get_screenshot()});
            main_window.show();
        }else{
            main_window.hide();
        };
    });
};
async function toggle_caps_status(){
    caps_status = !caps_status;
    if(caps_status){
        main_window.webContents.send('reflash', {screenshot: await get_screenshot()});
        main_window.show();
    }else{
        main_window.hide();
    };
};

async function get_screenshot(){
    let source = (await desktopCapturer.getSources({types: ['screen']}))[0];
    let imgdata = source.thumbnail.toDataURL();
    return imgdata;
};


function show_settings(){}; //TODO:








app.on('ready',()=>{
    create_tray();
    create_main_window();
    create_caps_listener();
});
app.on('will-quit',()=>{
    globalShortcut.unregisterAll();
});