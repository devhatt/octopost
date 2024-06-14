import type { StoryDefault } from '@ladle/react';
import { Story } from '@ladle/react';

import ComposerEditor from './ComposerEditor';

import { ComposerEditorProps } from './ComposerEditor.types';

export default {
  title: 'Composer Editor',
} satisfies StoryDefault;

export const ComposerEditorStories: Story<ComposerEditorProps> = (props) => (
  <ComposerEditor {...props} />
);

ComposerEditorStories.args = {
  value: '',
};
