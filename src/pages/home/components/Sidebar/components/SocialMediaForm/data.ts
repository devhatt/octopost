import FacebookIcon from './images/facebook.svg?react';
import InstagramIcon from './images/instagram.svg?react';
import TiktokIcon from './images/tiktok.svg?react';
import TwitterIcon from './images/twitter.svg?react';

const socialMedias = [
  {
    hasAccount: true,
    hasGroup: true,
    icon: FacebookIcon, // FALTA TIPAR O ICON
    name: 'Facebook',
  },
  {
    hasAccount: false,
    hasGroup: true,
    icon: InstagramIcon,
    name: 'Instagram',
  },
  {
    hasAccount: true,
    hasGroup: false,
    icon: TwitterIcon,
    name: 'Twitter',
  },
  {
    hasAccount: true,
    hasGroup: false,
    icon: TiktokIcon,
    name: 'Tiktok',
  },
  {
    hasAccount: false,
    hasGroup: false,
    icon: FacebookIcon,
    name: 'LinkedIn',
  },
];

export { socialMedias };
