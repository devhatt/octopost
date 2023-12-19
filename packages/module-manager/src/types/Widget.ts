import type React from 'react';

import type { GenericObject } from '~/utils/primitives';

export interface Widget {
  component: React.ComponentType<{ onChange: () => GenericObject }>;
  icon: JSX.Element;
  name: string;
}
