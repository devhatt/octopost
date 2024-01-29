import { jsx as _jsx } from 'react/jsx-runtime';
import { Example } from './Example';
export default {
  title: 'Components/Example',
};
export const ExampleComponent = (props) => _jsx(Example, { ...props });
ExampleComponent.args = {
  children: 'Hello',
};
