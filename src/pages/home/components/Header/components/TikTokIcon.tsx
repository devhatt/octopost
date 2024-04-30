import { ReactNode } from 'react';

import tiktokSvg from '../assets/tiktok.svg';

export type ITikTokProps = {
  alt: string;
  className: string;
  link: string;
};

function TikTokIcon(props: ITikTokProps): ReactNode {
  return (
    <a href={props.link}>
      {' '}
      <img alt={props.alt} src={tiktokSvg} />
    </a>
  );
}

export default TikTokIcon;
