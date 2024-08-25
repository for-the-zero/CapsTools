const { exec } = require('child_process');

function run(){
    exec('calc', (error, stdout, stderr) => {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
        if (error) {
            console.error(`exec error: ${error}`);
        };
    });
}

exports.default = {
    func: run,
    name: 'Example',
    icon: '<svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" viewBox="0 0 24 24"><path fill="currentColor" d="M1 21v-2h22v2zm1-3V3h20v15zm2-2h16V5H4zm0 0V5zm4-2h2v-2q0-.425.288-.712T11 11h2v2l3-3l-3-3v2h-2q-1.25 0-2.125.875T8 12z"/></svg>'
}