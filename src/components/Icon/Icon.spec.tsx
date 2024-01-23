import { render, screen } from '@testing-library/react';

import Icon from './Icon';

describe('Icon', () => {
  it('renders the icon element with the correct classes', () => {
    render(
      <Icon className="custom-class" color="active" icon="at" size="large" />
    );
    const iconElement = screen.getByTestId('icon-element');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('iAt');
    expect(iconElement).toHaveClass('large');
    expect(iconElement).toHaveClass('active');
    expect(iconElement).toHaveClass('custom-class');
  });
});
