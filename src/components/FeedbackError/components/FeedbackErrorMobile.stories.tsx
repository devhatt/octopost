import { useEffect } from 'react';

import type { Story } from '@ladle/react';

import { useError } from '~stores/useError/useError';

import FeedbackErrorMobile from './FeedbackErrorMobile';

export const FeedbackErrorComponent: Story = () => {
  const setErrors = useError((state) => state.setError);
  useEffect(() => {
    setErrors('mensagem de erro');
  }, [setErrors]);
  return <FeedbackErrorMobile />;
};
