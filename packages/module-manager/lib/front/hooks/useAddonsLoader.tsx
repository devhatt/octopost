import { useEffect } from 'react';
import axios from 'axios';
import { ADDON_FIND_PATH } from '@constants/addons';
import { getMountedURL } from '@resolvers/getMountedURL';
import { AddonInfo } from '@models';

export function useAddonsLoader(addonsInfo: AddonInfo[]) {
  useEffect(() => {
    async function getAddons() {
      for (const addonInfo of addonsInfo) {
        const { data: blob } = await axios.get(
          getMountedURL(ADDON_FIND_PATH, { addonId: addonInfo.name }),
          { responseType: 'blob' }
        );

        const script = document.createElement('script');

        script.id = addonInfo.name;

        script.addEventListener('load', () => script.remove());

        const url = URL.createObjectURL(blob);
        script.src = url;

        document.head.append(script);
      }
    }

    getAddons();
  }, [addonsInfo]);
}
