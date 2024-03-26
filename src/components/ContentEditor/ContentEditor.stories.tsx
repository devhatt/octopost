import { Story } from '@ladle/react';

import MainComposer from './ContentEditor';

import { TContentEditorProps } from './ContentEditor.types';

export const MainComposerStories: Story<TContentEditorProps> = (props) => (
  <MainComposer {...props} />
);
