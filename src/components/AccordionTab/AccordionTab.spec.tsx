import { render, screen } from '@testing-library/react';

import AccordionTab from './AccordionTab';

import type { TAccordionTabProps } from './AccordionTab.types';

beforeEach(() => {
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

const makeSut = (props: Partial<TAccordionTabProps>) => {
  return render(<AccordionTab {...props} />);
};

describe('AccordionTab', () => {
  describe('when [hideCloseButton] is false', () => {
    it('not render close button', () => {
      makeSut({});

      const button = screen.getByRole('button');

      expect(button);
    });
  });

  describe('when [renderHeader] is passed', () => {
    it('render custom header', () => {
      makeSut({
        renderHeader: () => <header>header</header>,
      });

      const header = screen.getByText('header');

      expect(header);
    });

    it('should function be called with children', () => {
      makeSut({
        children: 'children',
        renderHeader: ({ children }) => <header>{children}</header>,
      });

      const children = screen.getByText('children');

      expect(children);
    });
  });
});
