import { ReactNode } from 'react';

import octopostSvg from '../assets/octopostLogo.svg';

export type IOctopostLogoProps = {
  alt: string;
  link: string;
};

function OctopostLogo(props: IOctopostLogoProps): ReactNode {
  return (
    <a href={props.link}>
      <img alt={props.alt} src={octopostSvg} />
    </a>
  );
}

export default OctopostLogo;
