import fs from 'node:fs/promises';
import path from 'path';

/**
 * function to return the content inside the `main` line inside the `package.json`
 * @param {string} moduleDir  - path to find the package.json without the word `package.json`
 */
async function resolveModulePath(
  moduleDir: string
): Promise<string | undefined> {
  const parsedPackage = JSON.parse(
    await fs.readFile(`${moduleDir}/package.json`, 'utf8')
  );

  const mainContent = parsedPackage.main;

  if (!mainContent) {
    throw new Error('conteúdo dentro do package.json não-encontrado');
  }

  return path.join(moduleDir, mainContent);
}

export default resolveModulePath;
