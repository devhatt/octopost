import { ReactNode } from 'react';

import instagramSvg from '../assets/instagram.svg';

export type IInstagramProps = {
  alt: string;
  className: string;
  link: string;
};

function InstagramIcon(props: IInstagramProps): ReactNode {
  return (
    <a href={props.link}>
      {' '}
      <img alt={props.alt} src={instagramSvg} />
    </a>
  );
}

export default InstagramIcon;
