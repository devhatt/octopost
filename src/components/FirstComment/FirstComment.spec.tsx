import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FirstComment from './FirstComment';

import type { TFirstCommentProps } from './FirstComment.types';

const makeSut = ({ ...props }: Partial<TFirstCommentProps>) => {
  return render(<FirstComment {...props} />);
};

beforeEach(() => {
  window.scrollTo = jest.fn();
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('FirstComment', () => {
  describe('when checkbox is marked', () => {
    it('open Accordion', async () => {
      makeSut({});

      const input = screen.getByRole('checkbox');

      await userEvent.click(input);

      const textarea = screen.getByPlaceholderText('Digite algo aqui...');

      expect(textarea).toBeVisible();
    });
  });
});
