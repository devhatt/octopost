import { render, screen } from '@testing-library/react';
import Tabber from './Tabber';
import networkListMock from './data';

describe('Tabber', () => {
  it('renders network buttons', () => {
    render(<Tabber networkList={networkListMock} />);

    networkListMock.forEach((networkItem) => {
      const button = screen.getByText(networkItem.id);
      expect(button).toBeInTheDocument();
    });
  });
});
