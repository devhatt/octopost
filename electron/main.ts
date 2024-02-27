import cors from 'cors';
import { app, BrowserWindow } from 'electron';
import express, { Router } from 'express';
import path from 'node:path';
import process from 'node:process';

import resolveModulesMetadata from './utils/resolveModulesMetadata';

const expressApp = express();
const router = Router();
const port = 3000;

expressApp.use(cors());
expressApp.use(express.json());

router.get('/metadata', async (req, res) => {
  try {
    const userLocalModules = path.join(
      app.getPath('documents'),
      '/octopost/plugins/'
    );

    const mainContent = await resolveModulesMetadata(userLocalModules);
    res.json({ script: mainContent });
  } catch {
    res
      .status(404)
      .json({ message: 'conteúdo dentro do package.json não-encontrado' });
  }
});

expressApp.post('/sourcePath', (req, res) => {
  const { sourcePath } = req.body;

  if (!sourcePath) {
    res
      .status(404)
      .json({ message: 'conteúdo dentro do package.json não-encontrado' });
    return;
  }

  try {
    res.sendFile(sourcePath.toString());
  } catch {
    res
      .status(404)
      .json({ message: 'conteúdo dentro do package.json não-encontrado' });
  }
});

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

process.env.DIST = path.join(__dirname, '../dist');
const EXIT_SUCCESS = 0;

process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, '../public');

if (!app.requestSingleInstanceLock()) {
  app.quit();
  process.exit(EXIT_SUCCESS);
}

let win: BrowserWindow | null = null;

async function createWindow(): Promise<void> {
  expressApp.listen(port, () => {
    console.log(`internal server running on http://localhost:${port}`);
  });

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

  if (process.env.VITE_DEV_SERVER_URL) {
    try {
      await win.loadURL(process.env.VITE_DEV_SERVER_URL);
    } catch (error) {
      console.error(error);
    }
    win.webContents.openDevTools();
  } else {
    // win.loadFile('dist/index.html')
    await win.loadFile(path.join(process.env.DIST, 'index.html'));
  }
}

app.on('window-all-closed', () => {
  app.quit();
  win = null;
});

app.whenReady().then(createWindow).catch(console.error);
