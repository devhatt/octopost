import { ReactNode } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import { ErrorBoundary } from '@sentry/react';
import ModuleProvider from '~contexts/ModuleContext';

import Home from './pages/home/home';

import { Head } from '~components/Head/Head';
import SentryRoutes from '~components/SentrySetup/SentrySetup';

import './styles/base.scss';

function App(): ReactNode {
  return (
    <ErrorBoundary fallback={<p>Ocorreu um erro inesperado!</p>}>
      <ModuleProvider>
        <div>
          <Head />
          <Router>
            <SentryRoutes>
              <Route element={<Home />} path="/" />
            </SentryRoutes>
          </Router>
        </div>
      </ModuleProvider>
    </ErrorBoundary>
  );
}

export default App;
