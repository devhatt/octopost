import { render, screen } from '@testing-library/react';

import SocialMediaForm from './SocialMediaForm';

const setIsOpenMock = (): boolean => !true;

describe('Social Media Form', () => {
  it('renders correctly', () => {
    render(
      <SocialMediaForm
        isOpen
        onHandleToggleModal={() => setIsOpenMock}
        setIsOpen={setIsOpenMock}
      />
    );

    const el = screen.getByText(/facebook/i);

    expect(el).toBeInTheDocument();
  });
});
