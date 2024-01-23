import { Helmet } from 'react-helmet';

import { useModule } from '~contexts/ModuleContext';

export function Head() {
  const { modulesURL } = useModule();

  return (
    <Helmet>
      {modulesURL.map((module) => (
        <script defer key={module} src={module} type="module" />
      ))}
    </Helmet>
  );
}
