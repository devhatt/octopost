import { useState } from 'react';

import scss from './App.module.scss';

interface ITest {
  sim: string;
}

function App(role: ITest) {
  const [sim, setSim] = useState('');

  return (
    <div className={scss.teste} id="asdasdas" onClick={() => setSim('ali')}>
      <p>Hello World! SIM?</p> {role.sim} {sim}
    </div>
  );
}

export default App;
