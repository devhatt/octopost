import { Helmet } from 'react-helmet';

export function Head() {
  return (
    <Helmet defer>
      <script src="http://localhost:3000/modules" type="module" defer />
    </Helmet>
  );
}
