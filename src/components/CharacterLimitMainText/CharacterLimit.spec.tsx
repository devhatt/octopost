import { render, screen } from '@testing-library/react';

import CharacterLimit from './CharacterLimit.tsx';

describe('CharacterLimit Component', () => {
  it('render the component without svg', () => {
    render(<CharacterLimit maxLength={10} svg={null} value="1234" />);
    const characterLimit = screen.getByTestId(/characterlimit/i);
    expect(characterLimit).toBeInTheDocument();
  });

  it('render a svg component', () => {
    render(<CharacterLimit maxLength={10} svg="discord" value="1234" />);
    const characterLimit = screen.getByTestId('characterLimitWithIcon');
    expect(characterLimit).toBeInTheDocument();
  });

  it('render the max length', () => {
    render(<CharacterLimit maxLength={5} svg={null} value="123" />);

    const characterLimit = screen.getByText(/\/5/);
    expect(characterLimit).toBeInTheDocument();
  });

  it('render the exactly quantity of characters', () => {
    render(<CharacterLimit maxLength={7} svg={null} value="12345" />);
    const characterLimit = screen.getByText(/5\//);
    expect(characterLimit).toBeInTheDocument();
  });

  it('apply the desired class when value is grater than maxLength', () => {
    render(<CharacterLimit maxLength={5} svg={null} value="12345678" />);
    const characterLimit = screen.getByTestId(/characterlimit/i);
    expect(characterLimit).toHaveClass('exceeded');
  });
});
