import { ReactNode } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Home from './pages/home/home';

import SentryRoutes from '~components/SentrySetup/SentrySetup';

import scss from './App.module.scss';

import './styles/base.scss';

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
