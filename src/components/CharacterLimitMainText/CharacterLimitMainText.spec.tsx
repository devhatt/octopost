import React from 'react';

import { render } from '@testing-library/react';

import { networkListMock } from './networkListMock';

import CharacterLimitMainText from './CharacterLimitMainText';

describe('CharacterLimitMainText Component', () => {
  it('should renders with compost element', () => {
    const { container } = render(
      <CharacterLimitMainText
        value="hello mundo"
        socialList={networkListMock}
      />
    );
    const characterLimitMainTextElement = container.querySelector('.compost');
    expect(characterLimitMainTextElement).toBeInTheDocument();
  });
});
