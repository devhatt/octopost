import { useEffect } from 'react';

import type { Story } from '@ladle/react';

import { useError } from '~stores/useError/useError';

import FeedbackError from './FeedbackError';

interface IFeedbackErrorProps {
  errorMessage: string;
}

export const FeedbackErrorComponent: Story<IFeedbackErrorProps> = (props) => {
  const setErrorMessage = useError((state) => state.setErrorMessage);

  useEffect(() => {
    setErrorMessage(props.errorMessage);
  }, [props.errorMessage]);

  return <FeedbackError />;
};

FeedbackErrorComponent.args = {
  errorMessage: 'generic error message',
};
