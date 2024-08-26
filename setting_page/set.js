const { ipcRenderer } = require('electron');
const { setColorScheme, setTheme } = require('../src/mdui.cjs');
const $ = require('jquery');

//setColorScheme('#5577FF');
setColorScheme('#FB9944');

var config = {};
ipcRenderer.on('open_set', (event, datas) => {
    config = datas.config;
    setTheme(config.app_settings.light_dark);
    if (!config.app_settings.Chinese){
        $('*').each(function(){
            if ($(this).attr('data-entext')) {
                $(this).text($(this).attr('data-entext'));
            };
        });
    };
});