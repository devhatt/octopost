/// <reference types="vite-plugin-svgr/client" />

/// <reference types="vite/client" />

/// <reference path="globals.d.ts" />

interface ImportMetaEnv {
  readonly REACT_APP_SENTRY_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
