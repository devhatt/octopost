import React from 'react';
import {
  createRoutesFromChildren,
  matchRoutes,
  Routes,
  useLocation,
  useNavigationType,
} from 'react-router-dom';

import * as Sentry from '@sentry/react';

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

const SentrySetup = Sentry.withSentryReactRouterV6Routing(Routes);

function SentryRoutes({ children }: any) {
  return <SentrySetup>{children}</SentrySetup>;
}

export default SentryRoutes;
