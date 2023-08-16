import { render, screen } from '@testing-library/react';

import networkListMock from './data';

import Tabber from './Tabber';

describe('Tabber', () => {
  it('renders network buttons', () => {
    render(<Tabber socialList={networkListMock} children={''} />);

    networkListMock.forEach((socialItem) => {
      const button = screen.getByText(socialItem.id);
      expect(button).toBeInTheDocument();
    });
  });
});
