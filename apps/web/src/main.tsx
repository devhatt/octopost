import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const root = document.querySelector('#root');

ReactDOM.createRoot(root as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
