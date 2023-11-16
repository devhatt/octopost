import { render, screen } from '@testing-library/react';

import Accordion from './Accordion';

import type { TAccordionProps } from './Accordion.types';

beforeEach(() => {
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('Accordion', () => {
  const makeSut = ({
    renderHeader = () => <div>header</div>,
    renderContent = () => <div>content</div>,
    isOpen = false,
    ...props
  }: Partial<TAccordionProps>) => {
    return render(
      <Accordion
        isOpen={isOpen}
        renderHeader={renderHeader}
        renderContent={renderContent}
        {...props}
      />
    );
  };

  it('should not render body when [isOpen] is false', async () => {
    makeSut({ isOpen: false });

    const content = screen.queryByText('content');

    expect(content).not.toBeInTheDocument();
  });

  it('should render body when [isOpen] is true', async () => {
    makeSut({ isOpen: true });

    const content = screen.queryByText('content');

    expect(content).toBeVisible();
  });
});
