import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Route,
  HashRouter as Router,
  Routes,
  createRoutesFromChildren,
  matchRoutes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

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
  tracesSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,
});

const SentryRoutes = Sentry.withSentryReactRouterV6Routing(Routes);

function App() {
  return (
    <div className={scss.app}>
      <Helmet>
        <script src="http://localhost:3000/modules" type="module" defer />
      </Helmet>
      <Router>
        <SentryRoutes>
          <Route path="/" element={<Home />} />
        </SentryRoutes>
      </Router>
    </div>
  );
}

export default App;
