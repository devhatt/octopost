import type { GlobalProvider } from '@ladle/react';

import './laddle.scss';

export const Provider: GlobalProvider = ({ children }) => <div>{children}</div>;
