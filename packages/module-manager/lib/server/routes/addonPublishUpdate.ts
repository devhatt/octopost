import { AddonInfo } from '@models';
import { Service } from 'lib/shared/models/service';
import { getAddonsInfo } from 'lib/shared/resolvers/getAddonsInfo';

export class AddonInfoFind implements Service<AddonInfo[]> {
  path = 'addons';

  constructor(private addonFolder: string) {}

  execute(): AddonInfo[] {
    return getAddonsInfo(this.addonFolder);
  }
}
