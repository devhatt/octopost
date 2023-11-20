import type { GlobalProvider } from '@ladle/react';
import React from 'react';

import '../src/styles/base.scss';

export const Provider: GlobalProvider = ({ children }) => <div>{children}</div>;
