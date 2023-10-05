import { render } from '@testing-library/react';

import CharacterLimit from './CharacterLimit';

describe('CharacterLimit Component', () => {
  it('should apply the "exceeded" class when character limit is exceeded', () => {
    const maxLength = 10;
    const value = '12345678901';
    const svg = <svg />;

    const { container } = render(
      <CharacterLimit maxLength={maxLength} value={value} svg={svg} id={''} />
    );

    const characterLimitElement = container.querySelector('.characterLimit');
    expect(characterLimitElement).toHaveClass('exceeded');

    const remainingCharactersElement = container.querySelector(
      '.characterLimit span'
    );
    if (remainingCharactersElement) {
      expect(remainingCharactersElement.textContent).toBe('-1');
    } else {
    } //if null fuck u
  });
});

it('should not apply the "exceeded" class when character limit is not exceeded', () => {
  const maxLength = 10;
  const value = 'ShortText';
  const svg = <svg />;
  const id = 'id';
  const { container } = render(
    <CharacterLimit maxLength={maxLength} value={value} svg={svg} id={id} />
  );

  const characterLimitElement = container.querySelector('.characterLimit');
  expect(characterLimitElement).not.toHaveClass('exceeded'); // Not exceeded
});
