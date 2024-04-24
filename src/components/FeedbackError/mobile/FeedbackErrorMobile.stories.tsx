import type { Story } from '@ladle/react';

import FeedbackErrorMobile from './FeedbackErrorMobile';

import { TFeedbackErrorMobileProps } from './FeedbackErrorMobile.type';

export const FeedbackErrorComponent: Story<TFeedbackErrorMobileProps> = (
  props
) => <FeedbackErrorMobile error={props.error} />;

FeedbackErrorComponent.args = {
  error: { id: 'another-id', message: 'First generic error message' },
};
