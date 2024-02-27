import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

import type { CheckboxProps } from './Checkbox.types';

const makeSut = ({
  checked = false,
  onChange = vi.fn<unknown[]>(),
  ...props
}: Partial<CheckboxProps>): RenderResult =>
  render(
    <Checkbox checked={checked} onChange={onChange} {...props}>
      checkbox
    </Checkbox>
  );

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
