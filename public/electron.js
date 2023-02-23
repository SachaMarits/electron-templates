const path = require('path');
const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

function createWindow () {
  // Create the Browser Window.
  const win = new BrowserWindow({
    width: 1600,
    height: 900,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.maximize();
  
  // Load the correct react app 
  win.loadURL(
    isDev
      ? 'http://localhost:3333'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  // Open the DevTools.
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})