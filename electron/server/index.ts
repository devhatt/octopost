import { addons } from '@octopost/module-manager';
import { app as electron } from 'electron';
import {
  createApp,
  createRouter,
  eventHandler,
  getQuery,
  getRouterParams,
  handleCors,
  readBody,
  sendNoContent,
  serveStatic,
  toNodeListener,
} from 'h3';
import { readdir, readFile, stat } from 'node:fs/promises';
import { createServer } from 'node:http';
import path from 'node:path';
import vm from 'node:vm';

const PLUGINS_PATH = path.join(
  electron.getPath('documents'),
  '/octopost/plugins/'
);

const app = createApp();
const router = createRouter();

router.get(
  '/modules/metadata',
  eventHandler(async (event): Promise<unknown> => {
    handleCors(event, { origin: '*' });
    const plugins = await readdir(PLUGINS_PATH);

    const modules = await Promise.all(
      plugins.map(async (plugin: string) => {
        const packageJsonPath = path.join(PLUGINS_PATH, plugin, 'package.json');

        const packageFile = await readFile(packageJsonPath, 'utf-8');

        const packageJson = JSON.parse(packageFile);

        return {
          author: packageJson.author,
          name: packageJson.name,
          repositoryURL: packageJson.repository?.url,
          src: path.join(PLUGINS_PATH, plugin, packageJson.main),
          version: packageJson.version,
        };
      })
    );

    return modules;
  })
);

router.get(
  '/modules/resolve',
  eventHandler(async (event): Promise<void> => {
    handleCors(event, { origin: '*' });
    const { src } = getQuery<{ src: string | undefined }>(event);

    if (typeof src !== 'string') return sendNoContent(event);

    await serveStatic(event, {
      fallthrough: true,
      getContents: async () => readFile(src),
      getMeta: async () => {
        try {
          const stats = await stat(src);
          if (!stats.isFile()) return;
          return {
            mtime: stats.mtimeMs,
            size: stats.size,
          };
        } catch (error) {
          console.warn(error);
        }
      },
      indexNames: undefined,
    });
  })
);

router.get(
  '/modules/publish/:id',
  eventHandler(async (event): Promise<void> => {
    handleCors(event, { origin: '*' });
    return addons;
  })
);

app.use(router);

const httpServer = createServer(toNodeListener(app));

export default httpServer;
