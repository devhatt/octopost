import { TSocialNetworks } from './stores/useSocialNetworkStore.types';
import { TPostModeId } from './Tabber.types';

export const buildPostModeId = (
  socialNetwork: TSocialNetworks,
  index = 0
): TPostModeId => `${socialNetwork.id}-${index}`;
