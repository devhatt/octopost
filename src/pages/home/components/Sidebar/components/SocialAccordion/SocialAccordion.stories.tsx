import type { Story } from '@ladle/react';

import SocialAccordion from './SocialAccordion';

import { ISocialAccordion } from './SocialAccordion.type';

const accountList = [
  {
    id: 'jdoiawdawiodj',
    username: 'jhon doe',
    image:
      'https://pbs.twimg.com/profile_images/1539832609315987456/vaTzT3Co_400x400.jpg',
  },
  {
    id: 1234,
    username: 'joão da silva',
    image: '',
  },
];

export const SocicialAccordionComponent: Story<ISocialAccordion> = (props) => {
  return (
    <SocialAccordion
      error={props.error}
      accountList={props.accountList}
      socialMediaName={props.socialMediaName}
    />
  );
};

SocicialAccordionComponent.args = {
  socialMediaName: 'Facebook',
  error: false,
  accountList,
};
