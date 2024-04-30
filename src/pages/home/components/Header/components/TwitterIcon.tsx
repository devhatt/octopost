import { ReactNode } from 'react';

import twitterSvg from '../assets/twitter.svg';

export type ITwitterIconProps = {
  alt: string;
  className: string;
  link: string;
};

function TwitterIcon(props: ITwitterIconProps): ReactNode {
  return (
    <a href={props.link}>
      {' '}
      <img alt={props.alt} src={twitterSvg} />
    </a>
  );
}

export default TwitterIcon;
