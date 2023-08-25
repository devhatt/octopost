import { render, screen } from '@testing-library/react';

import { networkListMock } from './networkListMock';

import Tabber from './Tabber';

describe('Tabber', () => {
  it('renders network buttons', () => {
    render(<Tabber socialList={networkListMock} />);

    networkListMock.forEach((socialItem) => {
      const button = screen.getByText(socialItem.id);
      expect(button).toBeInTheDocument();
    });
  });
});
