import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import FirstComment from './FirstComment';

import type { TFirstCommentProps } from './FirstComment.types';

const makeSut = ({ ...props }: Partial<TFirstCommentProps>) => {
  return render(<FirstComment {...props} />);
};

beforeEach(() => {
  // https://github.com/vitest-dev/vitest/issues/4223
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  window.scrollTo = vi.fn<any>();
});

afterEach(() => {
  vi.clearAllMocks();
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
