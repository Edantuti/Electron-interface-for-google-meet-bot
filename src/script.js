const { remote } = require('electron')

document.getElementById('close').addEventListener('click', closeWindow);
document.getElementById('maxi').addEventListener('click', maximizeWindow);
document.getElementById('mini').addEventListener('click', minimizeWindow);


function closeWindow(){
    var window = remote.getCurrentWindow()
    window.close()
}

function maximizeWindow(){
    var window = remote.getCurrentWindow()
    window.isMaximized() ? window.unmaximize() : window.maximize();
}

function minimizeWindow(){
    var window = remote.getCurrentWindow()
    window.minimize()
}