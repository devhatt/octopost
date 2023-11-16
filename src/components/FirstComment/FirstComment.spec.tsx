import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FirstComment from './FirstComment';

import type { TFirstCommentProps } from './FirstComment.types';

beforeEach(() => {
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('FirstComment', () => {
  const makeSut = ({ ...props }: Partial<TFirstCommentProps>) => {
    return render(<FirstComment {...props} />);
  };

  it('should open Accordion when checkbox is marked', async () => {
    makeSut({});

    const input = screen.getByRole('checkbox');

    await userEvent.click(input);

    const textarea = screen.getByPlaceholderText('Digite algo aqui...');

    expect(textarea).toBeVisible();
  });
});
