import { render } from '@testing-library/react';

import CharacterLimitMainText from './CharacterLimitMainText';

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
