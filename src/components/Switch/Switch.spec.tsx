import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from './Switch';

import { SwitchProps } from './Switch.types';

const makeSut = (props: Partial<SwitchProps>): RenderResult =>
  render(<Switch {...props} />);

describe('Switch', () => {
  describe('when initialize', () => {
    it('should mount input', () => {
      makeSut({});

      const input = screen.getByRole('checkbox');

      expect(input).toBeInTheDocument();
    });

    it('should mount input with error', () => {
      makeSut({ variant: 'error' });

      const input = screen.getByRole('checkbox');

      expect(input).toBeInTheDocument();
    });
  });

  describe('when checked', () => {
    it('renders the switch on', () => {
      makeSut({ checked: true });

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
    });
  });

  describe('when not checked', () => {
    it('renders the switch off', () => {
      makeSut({ checked: false });

      const input = screen.getByRole('checkbox');

      expect(input).not.toBeChecked();
    });
  });

  describe('when click', () => {
    it('call onChange with true', async () => {
      const onChange = vi.fn();
      makeSut({ onChange });

      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      expect(onChange).toHaveBeenCalledWith(true);
    });

    it('should input to be checked', async () => {
      makeSut({});

      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      expect(input).toBeChecked();
    });
  });
});
