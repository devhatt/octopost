import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import scss from './App.module.scss';

import Home from './pages/home/';

interface ITest {
  sim: string;
}

function App(role: ITest) {
  const [sim, setSim] = useState('');

  const ali = (opa: string) => {
    setSim(opa);
  };

  return (
    <div className={scss.teste} id="#" onClick={() => ali('oi')}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <p>Hello World! SIM?</p> {role.sim} {sim}
    </div>
  );
}

export default App;
