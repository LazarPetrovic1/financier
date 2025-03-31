const { app, BrowserWindow, shell } = require('electron');
const path = require('path');
function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: "Money Tracker",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true
    },
    icon: `${__dirname}/icon.png`
  });
  win.setIcon(`${__dirname}/icon.png`)
  if (process.env.NODE_ENV === 'development') win.loadURL('http://localhost:3000');
  else win.loadFile(path.join(__dirname, 'build', 'index.html'), { hash: '' });
  win.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url); // Opens URL in the default browser.
    return { action: 'deny' }; // Prevents the URL from opening in the Electron app.
  });
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => { if (process.platform !== 'darwin') app.quit(); });
app.on('activate', () => { if (BrowserWindow.getAllWindows().length === 0) createWindow(); });