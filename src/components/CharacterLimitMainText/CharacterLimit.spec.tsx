import { render, screen } from '@testing-library/react';

import CharacterLimit from './CharacterLimit.tsx';

describe('CharacterLimit Component', () => {
  it('should render the component without svg', () => {
    render(
      <CharacterLimit id={'test'} maxLength={10} svg={null} value={'1234'} />
    );
    const characterLimit = screen.getByText('', {
      selector: '.characterLimit',
    });
    expect(characterLimit).toBeInTheDocument();
  });

  it('should render a svg component', () => {
    render(
      <CharacterLimit id={'test'} maxLength={10} svg={<svg />} value={'1234'} />
    );
    const characterLimit = screen.getByText('', { selector: '.svgColor' });
    expect(characterLimit).toBeInTheDocument();
  });

  it('should render the max length', () => {
    render(
      <CharacterLimit id={'test'} maxLength={5} svg={null} value={'123'} />
    );

    const characterLimit = screen.getByText(/\/5/);
    expect(characterLimit).toBeInTheDocument();
  });

  it('should render the exactly quantity of characters', () => {
    render(
      <CharacterLimit id={'test'} maxLength={7} svg={null} value={'12345'} />
    );
    const characterLimit = screen.getByText(/5\//);
    expect(characterLimit).toBeInTheDocument();
  });
});
