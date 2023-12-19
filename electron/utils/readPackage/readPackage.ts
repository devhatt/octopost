import fs from 'node:fs/promises';

import { IPluginMetadata } from './readPackage.types';

async function readPackage(moduleDir: string): Promise<IPluginMetadata> {
  const parsedPackage = JSON.parse(
    await fs.readFile(`${moduleDir}/package.json`, 'utf8')
  );

  if (!parsedPackage) {
    throw new Error('conteúdo dentro do package.json não-encontrado');
  }

  return parsedPackage as IPluginMetadata;
}

export default readPackage;
