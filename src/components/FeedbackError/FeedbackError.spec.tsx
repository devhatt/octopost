import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as useErrorHook from '~stores/useError/useError';

import FeedbackError from './FeedbackError';

describe('FeedbackError', () => {
  const useErrorSpy = vi.spyOn(useErrorHook, 'useError');

  it('When the error array is empty, the component should not be rendered', () => {
    useErrorSpy.mockReturnValue({
      errors: [],
    });

    render(<FeedbackError />);

    const feedbackError = screen.queryByTestId('error-container');
    expect(feedbackError).not.toBeVisible();
  });

  it('When the error array has at least one error, the component must be rendered', async () => {
    useErrorSpy.mockReturnValue(['Test error message']);

    render(<FeedbackError />);
    const dropDownButton = screen.getByRole('button');

    await userEvent.click(dropDownButton);

    const errorEvidence = screen.getByText(/Test error message/);
    expect(errorEvidence).toBeInTheDocument();
  });
});
