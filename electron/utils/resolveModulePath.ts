import fs from 'node:fs/promises';

/**
 * function to return the content inside the `main` line inside the `package.json`
 * @param {string} packagePath  - path to find the package.json without the word `package.json`
 */
async function resolveModulePath(
  packagePath: string
): Promise<string | undefined> {
  const data = await fs.readFile(`${packagePath}/package.json`, 'utf8');
  const mainContent = data.match(/"main"\s*:\s*"([^"]+)"/);

  if (!mainContent) {
    throw new Error('conteúdo dentro do package.json não-encontrado');
  }

  return `${packagePath}/${mainContent[1]}`;
}

export default resolveModulePath;
