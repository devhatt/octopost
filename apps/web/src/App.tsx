import { ReactNode } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { AddonProvider } from '@octopost/module-manager';

import Home from './pages/Home';
import scss from './App.module.scss';

export default function App(): ReactNode {
  return (
    <AddonProvider serverURL="http://localhost:3000">
      <div className={scss.app}>
        <Router>
          <Routes>
            <Route element={<Home />} path="/" />
          </Routes>
        </Router>
      </div>
    </AddonProvider>
  );
}
