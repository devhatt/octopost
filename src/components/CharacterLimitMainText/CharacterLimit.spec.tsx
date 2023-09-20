import { render } from '@testing-library/react';

import { networkListMock } from './networkListMock';

import CharacterLimitMainText from './CharacterLimitMainText';

describe('CharacterLimitMainText Component', () => {
  it('renders social items', () => {
    const { container } = render(
      <CharacterLimitMainText socialList={networkListMock} value="Test value" />
    );

    networkListMock.forEach((socialItem) => {
      const socialElement = container.querySelector(
        `.social-item-${socialItem.id}`
      );
      expect(socialElement).toBeInTheDocument();
    });
  });
});
