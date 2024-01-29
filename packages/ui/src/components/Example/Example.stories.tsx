import type { Story, StoryDefault } from '@ladle/react';

import { Example } from './Example';

import { ExampleProps } from './Example.types';

export default {
  title: 'Components/Example',
} satisfies StoryDefault;

export const ExampleComponent: Story<ExampleProps> = (props) => (
  <Example {...props} />
);

ExampleComponent.args = {
  children: 'Hello',
};
