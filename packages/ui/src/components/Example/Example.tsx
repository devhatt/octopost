import { ReactNode } from 'react';

import type { ExampleProps } from './Example.types';

import scss from './Example.module.scss';

export function Example({
  children = 'Hello World',
  ...props
}: ExampleProps): ReactNode {
  return (
    <div className={scss.container} {...props}>
      {children}
    </div>
  );
}
