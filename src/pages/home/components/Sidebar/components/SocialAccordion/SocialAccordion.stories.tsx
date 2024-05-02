import type { Story } from '@ladle/react';

import SocialAccordion from './SocialAccordion';

import { SocialAccordionProps } from './SocialAccordion.type';

const accounts: SocialAccordionProps['accounts'] = [
  {
    avatar: 'http://someurl.com',
    expiresAt: '2022-12-31T23:59:59Z',
    generatedAt: '2022-01-01T00:00:00Z',
    id: 'jdoiawdawiodj',
    socialMediaId: '123',
    token: 'token1',
    userName: 'jhon doe',
    valid: true,
  },
  {
    avatar: 'http://someurl.com',
    expiresAt: '2022-12-31T23:59:59Z',
    generatedAt: '2022-01-01T00:00:00Z',
    id: '1234',
    socialMediaId: '456',
    token: 'token2',
    userName: 'joão da silva',
    valid: false,
  },
];

export const SocicialAccordionComponent: Story<SocialAccordionProps> = (
  props
) => (
  <SocialAccordion
    accounts={props.accounts}
    error={props.error}
    socialMediaName={props.socialMediaName}
  />
);

SocicialAccordionComponent.args = {
  accounts,
  error: false,
  socialMediaName: 'Facebook',
};
