import { render } from '@testing-library/react';

import Testinho from './Testinho';

test('renders Testinho with default name', () => {
  const { getByText } = render(<Testinho />);
  const linkElement = getByText(/Hello, World!/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders Testinho with provided name', () => {
  const { getByText } = render(<Testinho name="React" />);
  const linkElement = getByText(/Hello, React!/i);
  expect(linkElement).toBeInTheDocument();
});
