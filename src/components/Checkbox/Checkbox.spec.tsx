import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from './Checkbox';

import type { CheckboxProps } from './Checkbox.types';

const makeSut = (props: Partial<CheckboxProps>): RenderResult =>
  render(<Checkbox {...props}>checkbox</Checkbox>);

describe('Checkbox', () => {
  describe('when checkbox render', () => {
    it('should mount input', async () => {
      makeSut({});

      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      expect(input).toBeInTheDocument();
    });
  });

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
