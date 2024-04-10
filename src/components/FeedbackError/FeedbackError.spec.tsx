import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import * as useErrorHook from '~stores/useError/useError';

import FeedbackError from './FeedbackError';

describe('FeedbackError', () => {
  const useErrorSpy = vi.spyOn(useErrorHook, 'useError');
  it('dont render the component if theres no errors on the errors array', () => {
    useErrorSpy.mockReturnValue({});

    render(<FeedbackError />);

    const feedbackError = screen.queryByText(
      'Failed to progress, please click on the button on the side to see the errors'
    );
    expect(feedbackError).not.toBeInTheDocument();
  });

  it('renders the component if theres at least one error on errors array', async () => {
    useErrorSpy.mockReturnValue(['Test error message']);

    render(<FeedbackError />);
    const dropDownButton = screen.getByRole('button');

    await userEvent.click(dropDownButton);

    const errorEvidence = screen.getByText(/Test error message/);
    expect(errorEvidence).toBeInTheDocument();
  });
});
