import FacebookIcon from './images/facebook.svg?react';
import InstagramIcon from './images/instagram.svg?react';
import TiktokIcon from './images/tiktok.svg?react';
import TwitterIcon from './images/twitter.svg?react';

const socialMedias = [
  {
    hasGroup: true,
    icon: FacebookIcon, // FALTA TIPAR O ICON
    name: 'Facebook',
  },
  {
    hasGroup: false,
    icon: InstagramIcon,
    name: 'Instagram',
  },
  {
    hasGroup: false,
    icon: TwitterIcon,
    name: 'Twitter',
  },
  {
    hasGroup: false,
    icon: TiktokIcon,
    name: 'Tiktok',
  },
  {
    hasGroup: false,
    icon: FacebookIcon,
    name: 'LinkedIn',
  },
];

export { socialMedias };
