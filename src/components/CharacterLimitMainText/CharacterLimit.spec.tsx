import { render, screen } from '@testing-library/react';

import CharacterLimit from './CharacterLimit.tsx';

describe('CharacterLimit Component', () => {
  it('render the component without svg', () => {
    render(
      <CharacterLimit id={'test'} maxLength={10} svg={null} value={'1234'} />
    );
    const characterLimit = screen.getByLabelText('characterLimit');
    expect(characterLimit).toBeInTheDocument();
  });

  it('render a svg component', () => {
    render(
      <CharacterLimit id={'test'} maxLength={10} svg={<svg />} value={'1234'} />
    );
    const characterLimit = screen.getByLabelText('characterLimitWithIcon');
    expect(characterLimit).toBeInTheDocument();
  });

  it('render the max length', () => {
    render(
      <CharacterLimit id={'test'} maxLength={5} svg={null} value={'123'} />
    );

    const characterLimit = screen.getByText(/\/5/);
    expect(characterLimit).toBeInTheDocument();
  });

  it('render the exactly quantity of characters', () => {
    render(
      <CharacterLimit id={'test'} maxLength={7} svg={null} value={'12345'} />
    );
    const characterLimit = screen.getByText(/5\//);
    expect(characterLimit).toBeInTheDocument();
  });

  it('changes his color when the value is higher then maxLength', () => {
    render(
      <CharacterLimit id={'test'} maxLength={5} svg={null} value={'12345678'} />
    );
    const characterLimit = screen.getByLabelText(/characterlimit/i);
    expect(characterLimit).toHaveClass('exceeded');
  });
});
