import { render } from '@testing-library/react';

import ComposerEditor from './ComposerEditor';

const placeholderText = 'Digite algo aqui...';

describe('ComposeEditor', () => {
  describe('when render component', () => {
    it('successfully renders with a TextArea', () => {
      const { getByPlaceholderText } = render(<ComposerEditor />);
      const textArea = getByPlaceholderText(placeholderText);

      expect(textArea).toBeInTheDocument();
    });
  });
});
