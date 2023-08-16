// import { render, fireEvent, screen } from '@testing-library/react';

// import CustomTextArea from './TextArea';

// describe('Textarea Component', () => {
//   it('textarea worked', () => {
//     render(<CustomTextArea />);
//     const textAreaElement = screen.getByPlaceholderText('Digite algo aqui...');

//     expect(textAreaElement).toBeInTheDocument();
//   });

//   it('update input value when typed', () => {
//     const { getByPlaceholderText } = render(<CustomTextArea />);
//     const inputElement = getByPlaceholderText(
//       'Digite algo aqui...'
//     ) as HTMLTextAreaElement;

//     fireEvent.change(inputElement, { target: { value: 'Test Input' } });

//     expect(inputElement.value).toBe('Test Input');
//   });
// });

// import React from 'react';

// import { render, fireEvent, screen } from '@testing-library/react';

// import CustomTextArea from './TextArea';

// test('it updates input value when typed', () => {
//   render(<CustomTextArea onTextChange={() => {}} maxLength={100} />);

//   const textarea = screen.getByPlaceholderText(
//     'Digite algo aqui...'
//   ) as HTMLTextAreaElement;
//   fireEvent.change(textarea, { target: { value: 'Hello, World!' } });

//   expect(textarea.value).toBe('Hello, World!');
// });
