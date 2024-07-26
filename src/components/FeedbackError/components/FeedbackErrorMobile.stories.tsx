import { useEffect } from 'react';

import type { Story } from '@ladle/react';

import { useError } from '~stores/useError/useError';

import FeedbackErrorMobile from './FeedbackErrorMobile';

export const FeedbackErrorComponent: Story = () => {
  const { addError, removeError } = useError();

  useEffect(() => {
    const newErrorId = addError({ message: 'error message' });

    return (): void => {
      removeError(newErrorId);
    };
  }, []);

  return <FeedbackErrorMobile />;
};
