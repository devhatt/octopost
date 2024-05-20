import { StoreAccount } from '~stores/useSocialMediaStore.types';

import IconF from './assets/facebook.svg';
import IconI from './assets/instagram.svg';
import IconX from './assets/x.svg';

const today = new Date().toISOString();
const nextYear = new Date();
nextYear.setFullYear(nextYear.getFullYear() + 1);

const mockTwitterAccounts: StoreAccount[] = [
  {
    avatar: IconX,
    expiresAt: nextYear.toISOString(),
    generatedAt: today,
    id: 'tw1',
    socialMediaId: 'twitter',
    token: 'token1',
    userName: 'twitter_1',
    valid: true,
  },
  {
    avatar: IconX,
    expiresAt: nextYear.toISOString(),
    generatedAt: today,
    id: 'tw2',
    socialMediaId: 'twitter',
    token: 'token2',
    userName: 'twitter_2',
    valid: false,
  },
];

const mockInstagramAccounts: StoreAccount[] = [
  {
    avatar: IconI,
    expiresAt: nextYear.toISOString(),
    generatedAt: today,
    id: 'ig1',
    socialMediaId: 'instagram',
    token: 'token3',
    userName: 'instagram_1',
    valid: true,
  },
  {
    avatar: IconI,
    expiresAt: nextYear.toISOString(),
    generatedAt: today,
    id: 'ig2',
    socialMediaId: 'instagram',
    token: 'token4',
    userName: 'instagram_2',
    valid: false,
  },
];

const mockFacebookAccounts: StoreAccount[] = [
  {
    avatar: IconF,
    expiresAt: nextYear.toISOString(),
    generatedAt: today,
    id: 'fb1',
    socialMediaId: 'facebook',
    token: 'token5',
    userName: 'facebook_1',
    valid: true,
  },
  {
    avatar: IconF,
    expiresAt: nextYear.toISOString(),
    generatedAt: today,
    id: 'fb2',
    socialMediaId: 'facebook',
    token: 'token6',
    userName: 'facebook_2',
    valid: false,
  },
  {
    avatar: IconF,
    expiresAt: nextYear.toISOString(),
    generatedAt: today,
    id: 'fb3',
    socialMediaId: 'facebook',
    token: 'token7',
    userName: 'facebook_3',
    valid: true,
  },
];

export { mockFacebookAccounts, mockInstagramAccounts, mockTwitterAccounts };
