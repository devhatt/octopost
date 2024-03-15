import type { StoryDefault } from '@ladle/react';
import { Story } from '@ladle/react';

import ComposerEditor from './ComposerEditor';

import { TComposerEditorProps } from './ComposerEditor.types';

export default {
  title: 'Composer Editor',
} satisfies StoryDefault;

export const ComposerEditorStories: Story<TComposerEditorProps> = (props) => (
  <ComposerEditor {...props} />
);

ComposerEditorStories.args = {
  value: '',
};
