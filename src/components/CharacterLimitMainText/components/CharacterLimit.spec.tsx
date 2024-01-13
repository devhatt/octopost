import { render } from '@testing-library/react';

import CharacterLimit from './CharacterLimit';

describe('CharacterLimit Component', () => {
  describe('when character limit is exceeded', () => {
    it('apply the exceeded class', () => {
      const maxLength = 10;
      const value = '12345678901333';
      const svg = <svg />;
      const id = 'id';

      const { container } = render(
        <CharacterLimit maxLength={maxLength} value={value} svg={svg} id={id} />
      );

      const characterLimitElement = container.querySelector('.characterLimit');
      expect(characterLimitElement).toHaveClass('exceeded');

      const remainingCharactersElement = container.querySelector(
        '.characterLimit span'
      );
      if (remainingCharactersElement) {
        expect(remainingCharactersElement.textContent).toBe('-4');
      }
    });
  });

  describe('when character limit is not exceeded', () => {
    it('not apply the exceeded class', () => {
      const maxLength = 10;
      const value = 'hello joga';
      const svg = <svg />;
      const id = 'id';
      const { container } = render(
        <CharacterLimit maxLength={maxLength} value={value} svg={svg} id={id} />
      );

      const characterLimitElement = container.querySelector('.characterLimit');
      expect(characterLimitElement).not.toHaveClass('exceeded');
    });
  });
});
