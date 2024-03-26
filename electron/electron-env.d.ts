 
/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  type ProcessEnv = {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬ dist
     * │ ├─┬ electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │ ├── index.html
     * │ ├── ...other-static-files-from-public
     * │
     * ```
     */
    DIST: string;
    /** /dist/ or /public/ */
    VITE_PUBLIC: string;
  }
}

// Used in Renderer process, expose in `preload.ts`
type Window = {
  ipcRenderer: import('electron').IpcRenderer;
}
