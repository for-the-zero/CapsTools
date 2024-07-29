const { ipcRenderer } = require('electron');

ele_d_shot = document.getElementsByClassName('screenshot')[0];

ipcRenderer.on('reflash',(event,datas)=>{
    ele_d_shot.src = datas['screenshot'];
});