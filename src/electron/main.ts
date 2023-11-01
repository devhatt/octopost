import axios, { AxiosRequestConfig } from 'axios';
import * as isDev from 'electron-is-dev';
import { app, BrowserWindow, ipcMain } from 'electron/main';
import * as path from 'path';

import { ICreatePost } from '../modules/types';

async function requestCreateTweet(data: ICreatePost): Promise<number> {
  const configRequest: AxiosRequestConfig<ICreatePost> = {
    headers: {
      Authorization: 'OAuth',
      // mode: 'no-cors',
      // Accept: '*',
      // 'Access-Control-Allow-Origin': '*',
      consumer_key: 'KQD4JQa2DTHTsNVVgAO2G5PMy', // api key
      consumer_secret: 'wF2muGMlGV4ZyvNkwmed5CJc8M384KbNCd8H8BTXOePRpahHT9', // api secret
      signature_method: 'HMAC-SHA1',
      access_token: '1539827254435450881-zF7ZowHXBXj9QK02KTrzvmeK2yZ6sf',
      access_token_secret: 'LSpt1gmcl9NjuRLNVEZTYtO44TnI3znLu08KttMgb2tPm',
      oauth_version: '1.0',
    },
  };

  const { status } = await axios.post(
    'https://api.twitter.com/2/tweets',
    data,
    configRequest
  );

  return status;
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, '/preload.ts'),
    },
  });

  win.loadURL(
    isDev
      ? 'http://localhost:3000'
      : `file://${path.join(__dirname, '../build/index.html')}`
  );

  win.webContents.openDevTools();
}

app.whenReady().then(() => {
  ipcMain.handle('createTweet', async (_event, data: ICreatePost) => {
    const responseStatus = await requestCreateTweet(data);
    return responseStatus;
  });

  createWindow();

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});
