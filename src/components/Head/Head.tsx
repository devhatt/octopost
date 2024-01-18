import { Helmet } from 'react-helmet';

import { useModule } from 'contexts/ModuleContext';

export function Head() {
  const { modulesURL } = useModule();

  return (
    <Helmet>
      {modulesURL.map((module) => (
        <script key={module} src={module} type="module" defer />
      ))}
    </Helmet>
  );
}
