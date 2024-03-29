import { ReactNode } from 'react';
import { Example } from '@octopost/ui';
import scss from './App.module.scss';

export default function App(): ReactNode {
  return (
    <div className={scss.app}>
      <Example />
    </div>
  );
}
