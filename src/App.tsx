import React, { ReactNode } from 'react';
import {
  createRoutesFromChildren,
  HashRouter as Router,
  matchRoutes,
  Route,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

import { AddonProvider } from '@octopost/module-manager';
import * as Sentry from '@sentry/react';

import Home from './pages/home/home';

import scss from './App.module.scss';

import './styles/base.scss';

Sentry.init({
  dsn: import.meta.env.REACT_APP_SENTRY_KEY,
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.reactRouterV6Instrumentation(
        React.useEffect,
        useLocation,
        useNavigationType,
        createRoutesFromChildren,
        matchRoutes
      ),
    }),
  ],
  replaysOnErrorSampleRate: 1,
  replaysSessionSampleRate: 0.1,
  tracesSampleRate: 1,
});

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

function App(): ReactNode {
  return (
    <AddonProvider httpServer="http://localhost:3000">
      <div className={scss.app}>
        <Router>
          <SentryRoutes>
            <Route element={<Home />} path="/" />
          </SentryRoutes>
        </Router>
      </div>
    </AddonProvider>
  );
}

export default App;
