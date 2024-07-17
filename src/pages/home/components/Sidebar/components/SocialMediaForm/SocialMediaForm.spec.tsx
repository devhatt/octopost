import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SocialMediaForm from './SocialMediaForm';

const setIsOpenMock = (): boolean => !true;

describe.only('Social Media Form', () => {
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
  it('calls onClick prop when clicked', async () => {
    const handleClick = vi.fn();

    render(<SocialMediaForm onHandleToggleModal={handleClick} />);

    const button = screen.getAllByRole('button');
    await userEvent.click(button[0]);

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
