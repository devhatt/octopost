import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Checkbox from './Checkbox';

import type { TCheckboxProps } from './Checkbox.types';

const makeSut = ({
  onChange = vi.fn(),
  checked = false,
  ...props
}: Partial<TCheckboxProps>) => {
  return render(
    <Checkbox checked={checked} onChange={onChange} {...props}>
      checkbox
    </Checkbox>
  );
};

describe('Checkbox', () => {
  describe('when checkbox be clicked', () => {
    it('call [onChange]', async () => {
      const onChange = vi.fn();

      makeSut({ onChange });

      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      expect(onChange).toHaveBeenCalledWith(true);
    });
  });
});
