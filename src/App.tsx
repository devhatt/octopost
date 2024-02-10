import { ReactNode } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/home';

import scss from './App.module.scss';

import './styles/base.scss';
import SentryRoutes from '~components/SentrySetup/SentrySetup';

function App(): ReactNode {
  return (
    <div className={scss.app}>
      <Router>
        <SentryRoutes>
          <Route element={<Home />} path="/" />
        </SentryRoutes>
      </Router>
    </div>
  );
}

export default App;
