import { Story } from '@ladle/react';

import FirstComment from './FirstComment';

import { TFirstCommentProps } from './FirstComment.types';

export const FirstCommentStories: Story<TFirstCommentProps> = (props) => {
  return <FirstComment {...props} />;
};
