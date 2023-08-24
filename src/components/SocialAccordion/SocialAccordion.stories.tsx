import type { Story } from '@ladle/react';

import SocialAccordion from './SocialAccordion';

import { ISocialAccordion } from './SocialAccordion.type';

const accountList = [
  {
    username: 'jhon doe',
    image: '',
  },
];

export const SocicialAccordionComponent: Story<ISocialAccordion> = (props) => {
  return (
    <SocialAccordion
      accountList={props.accountList}
      socialMediaName={props.socialMediaName}
    />
  );
};

SocicialAccordionComponent.args = {
  socialMediaName: 'Facebook',
  accountList,
};
