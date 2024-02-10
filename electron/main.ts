import { app, BrowserWindow } from 'electron';
import path from 'node:path';

import httpServer from './server';

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

process.env.DIST = path.join(__dirname, '../dist');

process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public');

if (!app.requestSingleInstanceLock()) {
  const EXIT_SUCCESS = 0;

  app.quit();
  process.exit(EXIT_SUCCESS);
}

let win: BrowserWindow | null = null;

async function createWindow(): Promise<void> {
  const DEFAULT_PORT = 3000;

  httpServer.listen(process.env.PORT ?? DEFAULT_PORT);

  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'logo.svg'),
    webPreferences: {
      contextIsolation: true,
      nodeIntegration: true,
      preload: path.join(__dirname, './preload.js'),
    },
  });

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', new Date().toLocaleString());
  });

  if (process.env.VITE_DEV_SERVER_URL === undefined) {
    await win.loadFile(path.join(process.env.DIST, 'index.html'));
  } else {
    await win.loadURL(process.env.VITE_DEV_SERVER_URL);
    win.webContents.openDevTools();
  }
}

app.on('window-all-closed', () => {
  app.quit();
  win = null;
});

void app.whenReady().then(createWindow);
