import { IPostMode } from 'modules/types';

import { TSocialNetworks } from './stores/useSocialNetworkStore.types';

export type TPostModeId = `${string}-${number}`;

export interface ITab extends TSocialNetworks {
  currentPostMode?: IPostMode;
  currentPostModeId?: TPostModeId;
}
