import { ReactNode } from 'react';

import { ExampleProps } from './Example.types';

// eslint-disable-next-line react/destructuring-assignment -- apenas teste
export function Example({
  children = 'Hello World',
  ...props
}: ExampleProps): ReactNode {
  return <div {...props}>{children}</div>;
}
