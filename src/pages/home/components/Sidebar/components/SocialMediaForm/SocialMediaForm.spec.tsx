import { render } from '@testing-library/react';

import SocialMediaForm from './SocialMediaForm';

const setIsOpenMock = (): boolean => !true;

describe('Social Media Form', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SocialMediaForm
        isOpen
        onHandleToggleModal={() => setIsOpenMock}
        setIsOpen={setIsOpenMock}
      />
    );

    expect(container).toBeDefined();
  });
});
