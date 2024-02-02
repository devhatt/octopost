import { ReactNode } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import ModuleProvider from '~contexts/ModuleContext';

import Home from './pages/home/home';

import { Head } from '~components/Head/Head';

import scss from './App.module.scss';

import './styles/base.scss';
import SentryRoutes from '~components/SentrySetup/SentrySetup';

function App(): ReactNode {
  return (
    <ModuleProvider>
      <div className={scss.app}>
        <Head />
        <Router>
          <SentryRoutes>
            <Route element={<Home />} path="/" />
          </SentryRoutes>
        </Router>
      </div>
    </ModuleProvider>
  );
}

export default App;
