import { render, screen } from '@testing-library/react';

import { Example } from './Example';

import type { ExampleProps } from './Example.types';

const makeSut = ({ ...props }: Partial<ExampleProps>): void => {
  const component = <Example {...props} />;
  render(component);
};

describe('ExampleComponent', () => {
  describe('when no props is passed', () => {
    it('renders without crash', () => {
      // setup
      makeSut({});

      // act
      const component = screen.getByText('Hello World');

      // assert
      expect(component).toBeDefined();
    });
  });
});
