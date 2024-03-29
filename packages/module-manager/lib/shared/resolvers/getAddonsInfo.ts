import fs from 'node:fs';
import path from 'node:path';

import { AddonInfo } from '@models';
import { getAddonPath } from './getAddonPath';

import { getPackageJson } from './getPackageJson';

/**
 * function to get all necessary metadata about the plugins installed
 * @param {string} folder - path to folder where all plugins are installed
 * @returns metadata of all plugins installed
 */
export function getAddonsInfo(folder: string): AddonInfo[] {
  const addonsInfo: AddonInfo[] = [];
  const addons = fs.readdirSync(folder);

  for (const addon of addons) {
    const addonFolder = path.join(folder, addon);

    const { author, name, version } = getPackageJson(addonFolder);

    const addonInfo: AddonInfo = {
      author: typeof author === 'string' ? author : author?.name,
      name: name,
      sourcePath: getAddonPath(addonFolder),
      version: version,
    };

    addonsInfo.push(addonInfo);
  }

  return addonsInfo;
}
