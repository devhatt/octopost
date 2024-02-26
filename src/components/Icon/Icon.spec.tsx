import React from 'react';

import { render } from '@testing-library/react';

import Icon from './Icon';

describe('Icon component', () => {
  it('renders without crashing', () => {
    render(<Icon icon="alert" />);
  });

  it('renders with optional size', () => {
    render(<Icon icon="alert" size={20} />);
  });

  it('renders with optional width and height', () => {
    render(<Icon height={30} icon="alert" width={30} />);
  });
});
