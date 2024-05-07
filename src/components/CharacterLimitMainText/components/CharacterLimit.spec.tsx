/* eslint-disable testing-library/no-node-access -- esses comentários devem ser resolvidos quando o TODO desse arquivo for resolvido */
/* eslint-disable testing-library/no-container  -- esses comentários devem ser resolvidos quando o TODO desse arquivo for resolvido*/
import { render } from '@testing-library/react';

import CharacterLimit from './CharacterLimit';

// TODO: reescrever esses testes usando getByText e getByRole, não usar os selectors de classes que tao sendo usado
describe('CharacterLimit Component', () => {
  describe('when character limit is exceeded', () => {
    it('apply the exceeded class', () => {
      const maxLength = 10;
      const value = '12345678901333';
      const svg = <svg />;
      const id = 'id';

      const { container } = render(
        <CharacterLimit id={id} maxLength={maxLength} svg={svg} value={value} />
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
        <CharacterLimit id={id} maxLength={maxLength} svg={svg} value={value} />
      );

      const characterLimitElement = container.querySelector('.characterLimit');
      expect(characterLimitElement).not.toHaveClass('exceeded');
    });
  });
});
