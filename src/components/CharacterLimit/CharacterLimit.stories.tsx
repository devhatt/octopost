import type { Story } from '@ladle/react';

import CharacterLimit from './CharacterLimit';

export const CharacterLimitComponent: Story<{
  maxLength: number;
  value: string;
}> = ({ maxLength, value }) => (
  <CharacterLimit maxLength={maxLength} value={value} />
);

CharacterLimitComponent.args = {
  maxLength: 20,
  value: 'Default value',
};
