import { ReactNode } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { ErrorBoundary } from '@sentry/react';

import Home from './pages/home/home';
import Register from './pages/register/register';

import SentryRoutes from '~components/SentrySetup/SentrySetup';

import './styles/base.scss';

// TODO: Fazer o projeto DEIXAR de ser monorepo
function App(): ReactNode {
  return (
    <ErrorBoundary fallback={<p>Ocorreu um erro inesperado!</p>}>
      <BrowserRouter>
        <SentryRoutes>
          <Route element={<Home />} path="/" />
          <Route element={<Register />} path="/register" />
        </SentryRoutes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
