import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SearchClue from './SearchClue';

// TODO: Refatorar esse arquivo, tem query fora do expect
describe('searchClue component', () => {
  const props = {
    label: 'label example',
    setValue: vi.fn(),
    value: 'value example',
  };

  render(<SearchClue {...props} />);

  const labelElement = screen.getByText('label example');
  const valueElement = screen.getByText('value example');
  const clearButton = screen.getByText('Clean');

  it('renders the searchClue', () => {
    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  it('callback on click clean button', async () => {
    await userEvent.click(clearButton);

    const valueAfterClick = screen.getByText('');
    expect(valueAfterClick).toBeInTheDocument();
  });
});
