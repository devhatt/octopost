// import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';

// import Testinho from './Testinho';

// describe('testinhoComponent', () => {
//   describe('when no props is passed', () => {
//     it('renders with de default value', () => {
//       render(<Testinho />);
//       const linkElement = screen.getByRole('heading', { level: 1 });
//       expect(linkElement.textContent).toBe('Hello, World!');
//     });
//   });

//   describe('when props is passed', () => {
//     it('renders with the provided prop', () => {
//       render(<Testinho name="React" />);
//       const linkElement = screen.getByRole('heading', { level: 1 });
//       expect(linkElement.textContent).toBe('Hello, React!');
//     });
//   });

//   describe('when interact with the posts button', () => {
//     it('sucessfully change value of posts', async () => {
//       const LABEL = 'Number of posts:';
//       render(<Testinho />);

//       const postsLabel = screen.getByText(`${LABEL} 0`);
//       expect(postsLabel.textContent).toBe(`${LABEL} 0`);

//       const increaseButton = screen.getByRole('button');

//       await userEvent.click(increaseButton);

//       expect(postsLabel.textContent).toBe(`${LABEL} 1`);
//     });
//   });
// });
