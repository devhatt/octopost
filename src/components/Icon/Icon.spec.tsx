import { render, RenderResult, screen } from '@testing-library/react';

import { Icon } from './Icon';

import { IconProps } from './Icon.types';

const makeSut = ({
  icon = 'alert',
  ...props
}: Partial<IconProps>): RenderResult => render(<Icon icon={icon} {...props} />);

describe('Icon', () => {
  describe('when is mounted', () => {
    it('render an image', () => {
      makeSut({});
      const icon = screen.getByRole('img');
      expect(icon).toBeInTheDocument();
    });
  });
});
