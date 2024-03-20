import { useState } from 'react';

import { faker } from '@faker-js/faker';
import type { Story, StoryDefault } from '@ladle/react';

import { AccountCard } from './AccountCard';

import { AccountCardProps } from './AccountCard.types';

export default {
  title: 'Account Card',
} satisfies StoryDefault;

export const StoryAccountCard: Story<AccountCardProps> = (props) => {
  const [favorite, setFavorite] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const handleChange = (isEnabled: boolean): void => {
    if (props.hasError === true)
      return window.alert('Não foi possível autenticar');
    return setEnabled(isEnabled);
  };

  return (
    <AccountCard
      style={{ maxWidth: '30rem' }}
      {...props}
      isEnabled={enabled}
      isFavorited={favorite}
      onEnableChange={handleChange}
      onFavoriteChange={setFavorite}
    />
  );
};

StoryAccountCard.args = {
  avatarURL: faker.image.avatar(),
  hasError: false,
  username: faker.internet.userName(),
};
