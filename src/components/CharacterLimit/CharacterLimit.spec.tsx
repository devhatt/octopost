import { render } from '@testing-library/react';

import CharacterLimit from './CharacterLimit';

describe('CharacterLimit', () => {
  it('renders CharacterLimit component', () => {
    const { container } = render(
      <CharacterLimit value="Hello, world!" maxLength={140} />
    );

    const remainingCharacters = container.querySelector('.remainingCharacters');

    expect(remainingCharacters).toBeInTheDocument();
  });
});
