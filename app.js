const { app, BrowserWindow } = require("electron");

let mainWindow;

function createWindow(){
    mainWindow = new BrowserWindow({
        width:500,
        height:600
    })
    mainWindow.loadURL("https://www.google.com");
}

app.on('ready', createWindow); 