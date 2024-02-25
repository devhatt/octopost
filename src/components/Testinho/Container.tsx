import React from 'react';

import scss from './Container.module.scss';

function Container(
  props: React.ComponentPropsWithoutRef<'div'>
): React.JSX.Element {
  return (
    <div className={scss.scrollContainer} data-testid="scroll">
      <div className={scss.wrapper} data-testid="wrapper">
        {props.children}
      </div>
    </div>
  );
}

export default Container;
