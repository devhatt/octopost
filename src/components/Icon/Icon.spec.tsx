import { render } from '@testing-library/react';

import Icon from './Icon';

describe('Icon component', () => {
  it('renders without crashing', () => {
    const { container } = render(<Icon icon="alert" />);
    expect(container).toBeInTheDocument();
  });

  it('renders with optional size', () => {
    const { container } = render(<Icon icon="alert" size={20} />);
    expect(container).toBeInTheDocument();
  });

  it('renders with optional width and height', () => {
    const { container } = render(<Icon height={30} icon="alert" width={30} />);
    expect(container).toBeInTheDocument();
  });
});
