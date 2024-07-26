import { useEffect } from 'react';

import type { Story } from '@ladle/react';

import { useError } from '~stores/useError/useError';

import FeedbackError from './FeedbackError';

import { TFeedbackErrorProps } from './FeedbackError.type';

export const FeedbackErrorComponent: Story<TFeedbackErrorProps> = (props) => {
  const { addError, removeError } = useError();

  useEffect(() => {
    const newErrorIds = props.errors.map((error) => addError(error));

    return (): void => {
      for (const errorId of newErrorIds) removeError(errorId);
    };
  }, []);

  return <FeedbackError />;
};

FeedbackErrorComponent.args = {
  errors: [
    { id: 'another-id', message: 'First generic error message' },
    { id: 'some-id', message: 'Second generic error message' },
  ],
};
