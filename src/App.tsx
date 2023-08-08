import { useState } from 'react';

import scss from './App.module.scss';

interface ITest {
  sim: string;
}

function App(role: ITest) {
  const [sim, setSim] = useState('');

  const ali = (opa: string) => {
    setSim(opa);
  };

  return (
    <div className={scss.teste} id="asdasdas" onClick={() => ali('oi')}>
      <p>Hello World! SIM?</p> {role.sim} {sim}
    </div>
  );
}

export default App;
