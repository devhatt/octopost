import { render } from '@testing-library/react';

import { Example } from './Example';

import { ExampleProps } from './Example.types';

const makeSut = ({
  children = 'Hello World!',
  ...props
}: Partial<ExampleProps>): void => {
  const component = <Example {...props}>{children}</Example>;
  render(component);
};

describe('ExampleComponent', () => {
  describe('when no props is passed', () => {
    it('renders without crash', () => {
      expect(makeSut({})).not.toThrow();
    });
  });
});
