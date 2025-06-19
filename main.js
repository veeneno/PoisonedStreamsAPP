const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    fullscreen: true,
    frame: true,
    icon: path.join(__dirname, 'icon.ico'),
    webPreferences: {
      devTools: false,
      contextIsolation: true,
      nodeIntegration: false
    }
  });

  win.webContents.on('before-input-event', (event, input) => {
    if (
      input.key.toLowerCase() === 'i' && input.control && input.shift ||
      input.key === 'F12'
    ) {
      event.preventDefault();
    }
  });

  win.loadURL('https://veneno.shop');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
