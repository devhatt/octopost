import { useEffect, useState } from 'react';
import { addonApi } from '@api';
import { AddonInfo } from '@models';
import { ADDON_BASE_PATH } from '@constants/addons';
import { useAddonsLoader } from './useAddonsLoader';

export function useAddonInfoLoad() {
  const [info, setInfo] = useState<AddonInfo[]>([]);

  useEffect(() => {
    async function handleFetch() {
      const { data } = await addonApi.get<AddonInfo[]>(ADDON_BASE_PATH);
      setInfo(data);
    }

    handleFetch();
  }, []);

  useAddonsLoader(info);

  return { info };
}
