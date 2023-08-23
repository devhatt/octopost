import { render } from '@testing-library/react';

import CharacterLimit from './CharacterLimit';

describe('CharacterLimit', () => {
  it('renders CharacterLimit component', () => {
    const { container } = render(
      <CharacterLimit value="Hello, world!" maxLength={140} />
    );

    const remainingCharacters = container.querySelector('.remainingCharacters');
    const fill = container.querySelector('.fill');

    expect(remainingCharacters).toBeInTheDocument();
    expect(fill).toBeInTheDocument();
  });
});
