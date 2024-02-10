/* eslint-disable @eslint-community/eslint-comments/disable-enable-pair -- . */
/* eslint-disable jsx-a11y/label-has-associated-control -- . */
/* eslint-disable react/forbid-dom-props -- . */
import { ReactNode } from 'react';

function Home(): ReactNode {
  return (
    <div style={{ margin: 30 }}>
      <label>
        <input />
      </label>
      <div>preview</div>
    </div>
  );
}

export default Home;
