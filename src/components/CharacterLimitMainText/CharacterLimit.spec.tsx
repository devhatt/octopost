import { render, screen } from '@testing-library/react';

import CharacterLimit from './CharacterLimit.tsx';

describe('CharacterLimit Component', () => {
  it('render the component without icon', () => {
    render(<CharacterLimit icon={null} maxLength={10} value="1234" />);
    const characterLimit = screen.getByTestId(/characterlimit/i);
    expect(characterLimit).toBeInTheDocument();
  });

  it('render a icon component', () => {
    render(<CharacterLimit icon="discord" maxLength={10} value="1234" />);
    const characterLimit = screen.getByTestId('characterLimitWithIcon');
    expect(characterLimit).toBeInTheDocument();
  });

  it('render the max length', () => {
    render(<CharacterLimit icon={null} maxLength={5} value="123" />);

    const characterLimit = screen.getByText(/\/5/);
    expect(characterLimit).toBeInTheDocument();
  });

  it('render the exactly quantity of characters', () => {
    render(<CharacterLimit icon={null} maxLength={7} value="12345" />);
    const characterLimit = screen.getByText(/5\//);
    expect(characterLimit).toBeInTheDocument();
  });

  it('apply the desired class when value is grater than maxLength', () => {
    render(<CharacterLimit icon={null} maxLength={5} value="12345678" />);
    const characterLimit = screen.getByTestId(/characterlimit/i);
    expect(characterLimit).toHaveClass('exceeded');
  });
});
