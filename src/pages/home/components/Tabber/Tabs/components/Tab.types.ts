import { SocialMedia } from '~services/api/social-media/social-media.types';
import { StoreAccount } from '~stores/useSocialMediaStore/useSocialMediaStore.types';

import { Tab } from '../../Tabber.types';

export type TabProps = {
  id: Tab['id'];
  isActive: boolean;
  onClickTab: (tabElement: HTMLElement) => void;
  socialMediaIcon: SocialMedia['icon'] | undefined;
  title: StoreAccount['userName'];
};
