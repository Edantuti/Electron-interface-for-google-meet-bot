
const {app, BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')

let win = null;

function createWindow(){
    win = new BrowserWindow({
        width:1280,
        height:720,
        webPreferences:{
            nodeIntegration: true,
            enableRemoteModule: true
        },
        frame: false
    })

    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))

    win.on('closed', () =>{
        win = null
    })
}

app.on('ready', createWindow)

app.on("window-all-closed", ()=>{
    if(process.platform !== 'darwin'){
        app.quit()
    }
})

app.on('activate', ()=>{
    if(BrowserWindow.getAllWindows().length === 0){
        createWindow()
    }
})