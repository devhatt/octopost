import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import scss from './App.module.scss';

import '~styles/base.scss';
import Home from './pages/home/';

function App() {
  return (
    <div className={scss.teste}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
