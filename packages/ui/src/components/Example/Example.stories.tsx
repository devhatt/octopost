import type { Story } from '@ladle/react';

import { Example } from './Example';

import { ExampleProps } from './Example.types';

export const ExampleComponent: Story<ExampleProps> = (props) => (
  <Example {...props} />
);
