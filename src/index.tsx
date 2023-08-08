import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import CustomTextArea from './components/Textarea';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App sim="nao" />
    <CustomTextArea value="placeholder" />
  </React.StrictMode>
);
