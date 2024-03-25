import { useEffect } from 'react';

import type { Story } from '@ladle/react';

import { useError } from '~stores/useError/useError';

import FeedbackError from './FeedbackError';

type IFeedbackErrorProps = {
  errors: string[];
};

export const FeedbackErrorComponent: Story<IFeedbackErrorProps> = (props) => {
  const setErrors = useError((state) => state.setErrors);

  useEffect(() => {
    for (const error of props.errors) {
      setErrors(error);
    }
  }, [props.errors, setErrors]);

  return <FeedbackError />;
};

FeedbackErrorComponent.args = {
  errors: ['generic error message', 'second generic error message'],
};
