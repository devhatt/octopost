import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Modal from '~components/Modal/Modal';

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

  it('renders and closes modal when the key is pressed', async () => {
    render(<Sidebar />);

    const buttonToOpenModal = screen.getByText(/\+ New Account/);
    await userEvent.click(buttonToOpenModal);

    const openModalEvidence = screen.getByText(/Adicionar Social/);
    expect(openModalEvidence).toBeInTheDocument();

    await userEvent.type(document.body, '{Escape}');

    await waitFor(() => {
      const closeModalEvidence = screen.queryByText(/Adicionar Social/);
      expect(closeModalEvidence).not.toBeInTheDocument();
    });
  });

  test('should close modal when clicked outside', async () => {
    render(<Modal />);

    await userEvent.click(document.body);

    const modalOpenEvidence = screen.queryByText('Adicionar Social');
    expect(modalOpenEvidence).not.toBeInTheDocument();
  });
});
