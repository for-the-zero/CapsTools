const { app, BrowserWindow, 
    Tray, Menu, nativeImage,
    ipcMain
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


function toggle_caps_status(){}; //TODO:
function show_settings(){}; //TODO:








app.on('ready',()=>{
    create_tray();
});