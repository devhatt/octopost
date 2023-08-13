import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/home/home';

import scss from './App.module.scss';

import './styles/base.scss';

function App() {
  return (
    <div className={scss.app}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
