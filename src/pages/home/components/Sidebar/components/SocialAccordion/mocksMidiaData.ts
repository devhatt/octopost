import IconF from './assets/facebook.svg';
import IconI from './assets/instagram.svg';
import IconX from './assets/x.svg';

import { TSocialAccordion } from './SocialAccordion.type';

const mockTwitterData: TSocialAccordion = {
  accountList: [
    {
      id: 'tw1',
      image: IconX,
      username: 'twitter_1',
    },
    {
      id: 'tw2',
      image: IconX,
      username: 'twitter_2',
    },
  ],
  error: false,
  socialMediaName: 'X',
};

const mockInstagramData: TSocialAccordion = {
  accountList: [
    {
      id: 'ig1',
      image: IconI,
      username: 'instagram_1',
    },
    {
      id: 'ig2',
      image: IconI,
      username: 'instagram_2',
    },
  ],
  error: false,
  socialMediaName: 'Instagram',
};

const mockFacebookData: TSocialAccordion = {
  accountList: [
    {
      id: '1',
      image: IconF,
      username: 'facebook_1',
    },
    {
      id: '2',
      image: IconF,
      username: 'facebook_2',
    },
    {
      id: '3',
      image: IconF,
      username: 'facebook_3',
    },
  ],
  error: false,
  socialMediaName: 'Facebook',
};

export { mockFacebookData, mockInstagramData, mockTwitterData };
