import { render } from '@testing-library/react';

import CharacterLimitMainText from './CharacterLimitMainText';

describe('CharacterLimitMainText map test', () => {
  it('renders the correct number of elements', () => {
    const modules = [
      { maxLength: 10, value: 'Option 1', id: '1', svg: <svg /> },
      { maxLength: 15, value: 'Option 2', id: '2', svg: <svg /> },
      { maxLength: 20, value: 'Option 3', id: '3', svg: <svg /> },
    ];

    const { container } = render(<CharacterLimitMainText module={modules} />);

    const optionElements = container.querySelectorAll('.characterLimit');
    expect(optionElements).toHaveLength(modules.length);
  });
});
