import type { GlobalProvider } from '@ladle/react';
import React from 'react';

import './styles.scss';
import '../src/styles/reset.css';

export const Provider: GlobalProvider = ({ children }) => {
  return <div>{children}</div>;
};
