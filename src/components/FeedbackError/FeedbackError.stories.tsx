import { useEffect } from 'react';

import type { Story } from '@ladle/react';
import { useFeedbackError } from 'stores/feedbackError/useFeedbackError';

import FeedbackError from './FeedbackError';
interface IFeedbackErrorProps {
  errorMessage: string;
}

export const FeedbackErrorComponent: Story<IFeedbackErrorProps> = (props) => {
  const updateError = useFeedbackError((state) => state);

  useEffect(() => {
    updateError.setErrorMessage(props.errorMessage);
  }, [props.errorMessage]);

  return <FeedbackError />;
};

FeedbackErrorComponent.args = {
  errorMessage: 'generic error message',
};
