/* eslint-disable @typescript-eslint/naming-convention */
/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly REACT_APP_SENTRY_KEY: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module '*.scss' {
  const content: { [className: string]: string };
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';
