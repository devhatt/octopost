import type { Story } from '@ladle/react';

import SocialAccordion from './SocialAccordion';

import { ISocialAccordion } from './SocialAccordion.type';

const accountList = [
  {
    id: 'jdoiawdawiodj',
    image:
      'https://pbs.twimg.com/profile_images/1539832609315987456/vaTzT3Co_400x400.jpg',
    username: 'jhon doe',
  },
  {
    id: 1234,
    image: '',
    username: 'joão da silva',
  },
];

export const SocicialAccordionComponent: Story<ISocialAccordion> = (props) => (
    <SocialAccordion
      accountList={props.accountList}
      error={props.error}
      socialMediaName={props.socialMediaName}
    />
  );

SocicialAccordionComponent.args = {
  accountList,
  error: false,
  socialMediaName: 'Facebook',
};
