import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Switch from './Switch';

describe('Switch', () => {
  describe('when initialize', () => {
    it('should render the switch off', () => {
      render(<Switch checked={false} setChecked={() => {}} />);

      const switchComponent = screen.getByRole('checkbox');

      expect(switchComponent).not.toBeChecked();
      expect(switchComponent).toBeInTheDocument();
    });

    it('should render the switch off', () => {
      render(<Switch checked={true} setChecked={() => {}} />);

      const switchComponent = screen.getByRole('checkbox');

      expect(switchComponent).toBeChecked();
      expect(switchComponent).toBeInTheDocument();
    });
  });

  describe('when click', () => {
    it('should call the setChecked function ', () => {
      const setCheckedMock = jest.fn();
      render(<Switch checked={true} setChecked={setCheckedMock} />);

      const switchComponent = screen.getByRole('checkbox');
      userEvent.click(switchComponent);

      expect(setCheckedMock).toHaveBeenCalledTimes(1);
    });
  });
});
