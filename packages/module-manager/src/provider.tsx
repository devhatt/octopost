import { PropsWithChildren, ReactNode, useEffect, useState } from 'react';
import { AddonContext } from './context.js';

export function AddonProvider({ children }: PropsWithChildren): ReactNode {
  const [info, setInfo] = useState<any[]>([]);
  const [modules, setModules] = useState<any[]>([]);

  useEffect(() => {
    return () => {};
  });

  return (
    <AddonContext.Provider value={{ modules }}>
      {children}
    </AddonContext.Provider>
  );
}
