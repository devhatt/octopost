import { useState } from 'react';

import type { StoryDefault } from '@ladle/react';
import { Story } from '@ladle/react';

import ComposerEditor from './ComposerEditor';

import { TComposerEditorProps } from './ComposerEditor.types';

export default {
  title: 'Composer Editor',
} satisfies StoryDefault;

export const ComposerEditorStories: Story<TComposerEditorProps> = (props) => {
  const [inputText, setInputText] = useState(props.inputText);

  return (
    <ComposerEditor
      inputText={inputText}
      onTextChange={setInputText}
      {...props}
    />
  );
};

ComposerEditorStories.args = {
  inputText: '',
};
