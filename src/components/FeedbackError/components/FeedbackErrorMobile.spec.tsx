import { render, screen } from '@testing-library/react';

import * as useErrorHook from '~stores/useErrorStore/useErrorStore';

import FeedbackErrorMobile from './FeedbackErrorMobile';

describe('FeedbackError', () => {
  const useErrorSpy = vi.spyOn(useErrorHook, 'useError');

  it('dont render the component if theres no errors on the errors object', () => {
    useErrorSpy.mockReturnValue({ errors: {} });

    render(<FeedbackErrorMobile />);

    const errorToast = screen.queryByText(
      'Algumas publicações estão com erros, corrija-os para prosseguir. Clique aqui para mais detalhes.'
    );

    expect(errorToast).not.toBeInTheDocument();
  });

  it('renders the component if there is at least one error on errors object', () => {
    useErrorSpy.mockReturnValue({
      errors: {
        'some-id': { id: 'some-id', message: 'Test error message' },
      },
    });

    render(<FeedbackErrorMobile />);

    const errorToast = screen.getByRole('button');

    expect(errorToast).toBeInTheDocument();
  });
});
