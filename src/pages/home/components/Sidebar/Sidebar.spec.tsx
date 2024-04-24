import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Sidebar from './Sidebar';

describe('Sidebar', () => {
  it('renders correctly', () => {
    render(<Sidebar />);

    const sideBarComponentEvidence = screen.getByText(/Select Social Media/);

    expect(sideBarComponentEvidence).toBeInTheDocument();
  });

  it('renders the InputSearch', async () => {
    render(<Sidebar />);

    const inputSearchComponent = screen.getByPlaceholderText(
      /Search for social media/
    );

    expect(inputSearchComponent).toBeInTheDocument();

    await userEvent.type(inputSearchComponent, 'Test text');

    expect(inputSearchComponent).toHaveValue('Test text');
  });

  it('renders modal when button is clicked', async () => {
    render(<Sidebar />);
    const buttonToOpenModal = screen.getByText(/\+ New Account/);
    await userEvent.click(buttonToOpenModal);

    const openModalEvidence = screen.getByText(/Adcionar Social/);
    expect(openModalEvidence).toBeInTheDocument();
  });
});
