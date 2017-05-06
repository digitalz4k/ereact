const { app, BrowserWindow } = require('electron')
const path = require('path')
const url = require('url')

let mainWindow

function createWindow () {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 480,
        //kiosk: true,
        frame: false
    })

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname + '/public/index.html'),
        protocol: 'file:',
        slashes: true
    }))

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', () => {
        mainWindow = null
    })
} 

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if(process.platform != 'darwin')
        app.quit()
})

app.on('activate', () => {
    if (win === null)
        createWindow()
})