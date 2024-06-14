/// <reference types="vite-plugin-svgr/client" />

/// <reference types="vite/client" />

declare module '*.scss' {
  const content: Record<string, string>;
  export default content;
}

declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.gif';

type ImportMetaEnv = {
  readonly REACT_APP_SENTRY_KEY: string;
  readonly VITE_ENVIRONMENT: string;
  // more env variables...
};

type ImportMeta = {
  readonly env: ImportMetaEnv;
};
