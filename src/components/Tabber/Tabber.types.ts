import {
  Post,
  SocialMedia,
} from '~services/api/social-media/social-media.types';
import { Post as PostType } from '~stores/usePostStore/usePostStore.types';

export type TabId =
  `${PostType['socialMediaId']}-${PostType['postModes'][number]['postModeId']}`;

export type Tab = {
  account: PostType;
  id: TabId;
  postModeOnView: SocialMedia['postModes'][number]['id'];
  postModes: Record<SocialMedia['postModes'][number]['id'], Post['data']>;
};

export type Tabs = Record<TabId, Tab>;
