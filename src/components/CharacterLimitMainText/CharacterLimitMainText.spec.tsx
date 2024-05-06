/* eslint-disable testing-library/no-node-access -- esses comentários devem ser resolvidos quando o TODO desse arquivo for resolvido */
/* eslint-disable testing-library/no-container -- esses comentários devem ser resolvidos quando o TODO desse arquivo for resolvido */
import { render } from '@testing-library/react';

import CharacterLimitMainText from './CharacterLimitMainText';

// TODO: reescrever esses testes usando getByText e getByRole, não usar os selectors de classes que tao sendo usado
describe('CharacterLimitMainText map test', () => {
  it('renders the correct number of elements', () => {
    const modules = [
      { id: '1', maxLength: 10, svg: <svg />, value: 'Option 1' },
      { id: '2', maxLength: 15, svg: <svg />, value: 'Option 2' },
      { id: '3', maxLength: 20, svg: <svg />, value: 'Option 3' },
    ];

    const { container } = render(<CharacterLimitMainText module={modules} />);

    const optionElements = container.querySelectorAll('.characterLimit');
    expect(optionElements).toHaveLength(modules.length);
  });
});
