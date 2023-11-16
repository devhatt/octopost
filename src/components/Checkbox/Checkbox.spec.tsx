import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

import type { TCheckboxProps } from './Checkbox.types';

describe('Checkbox', () => {
  const makeSut = ({ ...props }: Partial<TCheckboxProps>) => {
    return render(<Checkbox {...props} />);
  };

  it('should call [onChange] when checkbox be clicked', async () => {
    const onChange = jest.fn();

    makeSut({ onChange });

    const input = screen.getByRole('checkbox');

    await userEvent.click(input);

    expect(onChange).toHaveBeenCalledWith(true);
  });
});
