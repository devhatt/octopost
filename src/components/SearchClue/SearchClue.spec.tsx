import { render, fireEvent } from '@testing-library/react';

import SearchClue from './SearchClue';

describe('searchClue component', () => {
  const props = {
    value: 'value example',
    label: 'label example',
    setValue: jest.fn(),
  };

  const { getByText } = render(<SearchClue {...props} />);

  const labelElement = getByText('label example');
  const valueElement = getByText('value example');
  const clearButton = getByText('Clean');
  it('renders the searchClue', () => {
    expect(labelElement).toBeInTheDocument();
    expect(valueElement).toBeInTheDocument();
  });

  it('callback on click clean button', async () => {
    fireEvent.click(clearButton);

    const valueAfterClick = getByText('');
    expect(valueAfterClick).toBeInTheDocument();
  });
});
