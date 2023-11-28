import type { GlobalProvider, StoryDefault } from '@ladle/react';
import React from 'react';

import './laddle.scss';

export const Provider: GlobalProvider = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}