import { useEffect } from 'react';

import type { Story } from '@ladle/react';

import { useError } from '~stores/useError/useError';

import FeedbackError from './FeedbackError';

import { TFeedbackErrorProps } from './FeedbackError.type';

export const FeedbackErrorComponent: Story<TFeedbackErrorProps> = (props) => {
  const setErrors = useError((state) => state.addError);
  useEffect(() => {
    for (const error of props.errors) {
      setErrors(error);
    }
  }, [props.errors, setErrors]);
  return <FeedbackError />;
};

FeedbackErrorComponent.args = {
  errors: [
    { id: 'another-id', message: 'First generic error message' },
    { id: 'some-id', message: 'Second generic error message' },
  ],
};
