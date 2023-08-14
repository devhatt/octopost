import { fireEvent, render, screen } from '@testing-library/react';

import Testinho from './Testinho';

describe('testinhoComponent', () => {
  describe('when no props is passed', () => {
    it('renders with de default value', () => {
      const { getByRole } = render(<Testinho />);
      const linkElement = getByRole('heading', { level: 1 });
      expect(linkElement.textContent).toBe('Hello, World!');
    });
  });

  describe('when props is passed', () => {
    it('renders with the provided prop', () => {
      const { getByRole } = render(<Testinho name="React" />);
      const linkElement = getByRole('heading', { level: 1 });
      expect(linkElement.textContent).toBe('Hello, React!');
    });
  });

  describe('when interact with the posts button', () => {
    it('sucessfully change value of posts', () => {
      const LABEL = 'Number of posts:';
      const { getByRole } = render(<Testinho />);

      const postsLabel = screen.getByText(`${LABEL} 0`);
      expect(postsLabel.textContent).toBe(`${LABEL} 0`);

      const increaseButton = getByRole('button');

      fireEvent.click(increaseButton);

      expect(postsLabel.textContent).toBe(`${LABEL} 1`);
    });
  });
});
