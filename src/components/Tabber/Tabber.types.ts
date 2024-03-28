import { PostMode } from '@octopost/module-manager';

import { TSocialNetworks } from './stores/useSocialNetworkStore.types';

export type TPostModeId = `${string}-${number}`;

export interface ITab extends TSocialNetworks {
  currentPostMode?: PostMode;
  currentPostModeId?: TPostModeId;
};

export type TTabState = Record<
  TPostModeId,
  {
    text: string;
  }
>;
