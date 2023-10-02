import { render } from '@testing-library/react';

import CharacterLimit from './CharacterLimit';

describe('CharacterLimit', () => {
  it('renders CharacterLimit component', () => {
    const { container } = render(
      <CharacterLimit value="Hello, world!" maxLength={140} id={''} />
    );

    const svgColor = container.querySelector('.svgColor');
    const characterLimit = container.querySelector('.characterLimit');

    expect(svgColor).toBeInTheDocument();
    expect(characterLimit).toBeInTheDocument();
  });
});
