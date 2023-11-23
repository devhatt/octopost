import { render, screen } from '@testing-library/react';

import Icon from './Icon';

describe('Icon', () => {
  it('renders the icon element with the correct classes', () => {
    render(
      <Icon icon="at" color="active" size="large" className="custom-class" />
    );
    const iconElement = screen.getByTestId('icon-element');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('iAt');
    expect(iconElement).toHaveClass('large');
    expect(iconElement).toHaveClass('active');
    expect(iconElement).toHaveClass('custom-class');
  });
});
