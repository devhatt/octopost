import cors from 'cors';
import { app, BrowserWindow } from 'electron';
import express, { Request } from 'express';
import path from 'node:path';

import { EHttpStatusCode } from '../src/enums/httpStatusCodes';
import resolveModulesMetadata from './utils/resolveModulesMetadata';

const expressApp = express();
const port = 3000;

expressApp.use(cors());
expressApp.use(express.json());

expressApp.get('/metadata', (_, res) => {
  void (async function (): Promise<void> {
    try {
      const userLocalModules = path.join(
        app.getPath('documents'),
        '/octopost/plugins/'
      );

      const mainContent = await resolveModulesMetadata(userLocalModules);
      res.json({ script: mainContent });
    } catch {
      res
        .status(EHttpStatusCode.NOT_FOUND)
        .json({ message: 'conteúdo dentro do package.json não-encontrado' });
    }
  })();
});

expressApp.post(
  '/sourcePath',
  (req: Request<object, object, { sourcePath: string }>, res): void => {
    const { sourcePath } = req.body;

    if (!sourcePath) {
      res
        .status(EHttpStatusCode.NOT_FOUND)
        .json({ message: 'conteúdo dentro do package.json não-encontrado' });
      return;
    }

    try {
      res.sendFile(sourcePath.toString());
    } catch {
      res
        .status(EHttpStatusCode.NOT_FOUND)
        .json({ message: 'conteúdo dentro do package.json não-encontrado' });
    }
  }
);

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
