import { render, screen } from '@testing-library/react';

import Accordion from './Accordion';

import type { TAccordionProps } from './Accordion.types';

beforeEach(() => {
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

const makeSut = ({
  header = <div>header</div>,
  content = <div>content</div>,
  isOpen = false,
  ...props
}: Partial<TAccordionProps>) => {
  return render(
    <Accordion isOpen={isOpen} header={header} content={content} {...props} />
  );
};

describe('Accordion', () => {
  it('not render body when [isOpen] is false', () => {
    makeSut({ isOpen: false });

    const content = screen.queryByText('content');

    expect(content).not.toBeInTheDocument();
  });

  it('render body when [isOpen] is true', () => {
    makeSut({ isOpen: true });

    const content = screen.getByText('content');

    expect(content).toBeVisible();
  });
});
