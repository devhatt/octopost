import { render, RenderResult, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Switch } from './Switch';

import { SwitchProps } from './Switch.types';

const makeSut = (props: Partial<SwitchProps>): RenderResult =>
  render(<Switch {...props} />);

describe('Switch', () => {
  describe('when is mounted', () => {
    it('render a checkbox', () => {
      makeSut({});

      const input = screen.getByRole('checkbox');

      expect(input).toBeInTheDocument();
    });

    it('render with variant error', () => {
      makeSut({ variant: 'error' });

      const input = screen.getByRole('checkbox');

      expect(input).toBeInTheDocument();
    });
  });

  describe('when checked', () => {
    it('render with switch on', () => {
      makeSut({ checked: true });

      const input = screen.getByRole('checkbox');

      expect(input).toBeChecked();
    });
  });

  describe('when not checked', () => {
    it('render with switch off', () => {
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

    it('to be checked', async () => {
      makeSut({});

      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      expect(input).toBeChecked();
    });
  });
});
