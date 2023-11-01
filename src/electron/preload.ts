import { contextBridge, ipcRenderer } from 'electron';

import { ICreatePost } from '../modules/types';

contextBridge.exposeInMainWorld('serverCalls', {
  createTweet: async (post: ICreatePost) => {
    const responseStatus = await ipcRenderer.invoke('createTweet', post);
    return responseStatus;
  },
});
