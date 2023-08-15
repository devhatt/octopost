import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Switch from './Switch';

describe('Switch', () => {
  describe('when initialize', () => {
    it('renders the switch off when checked={false}', () => {
      render(<Switch checked={false} setChecked={() => {}} />);

      const switchComponent = screen.getByRole('checkbox');

      expect(switchComponent).not.toBeChecked();
      expect(switchComponent).toBeInTheDocument();
    });

    it('renders the switch on when checked={true}', () => {
      render(<Switch checked={true} setChecked={() => {}} />);

      const switchComponent = screen.getByRole('checkbox');

      expect(switchComponent).toBeChecked();
      expect(switchComponent).toBeInTheDocument();
    });
  });

  describe('when click', () => {
    it('calls the setChecked function', async () => {
      const setCheckedMock = jest.fn();
      render(<Switch checked={true} setChecked={setCheckedMock} />);

      const switchComponent = screen.getByRole('checkbox');
      userEvent.click(switchComponent);

      await waitFor(() => expect(setCheckedMock).toHaveBeenCalledTimes(1));
    });
  });
});
