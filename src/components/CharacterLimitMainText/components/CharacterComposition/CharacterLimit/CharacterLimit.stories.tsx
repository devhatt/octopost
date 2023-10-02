import type { Story } from '@ladle/react';

import CharacterLimit from './CharacterLimit';

export const CharacterLimitComponent: Story<{
  maxLength: number;
  value: string;
  id: string;
}> = ({ maxLength, value, id }) => (
  <CharacterLimit maxLength={maxLength} value={value} id={id} />
);

CharacterLimitComponent.args = {
  maxLength: 20,
  value: 'Default value',
};
