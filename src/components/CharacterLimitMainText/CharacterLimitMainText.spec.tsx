import { render } from '@testing-library/react';

import CharacterLimitMainText from './CharacterLimitMainText';

describe('CharacterLimitMainText Component', () => {
  it('renders correctly with mockzin', () => {
    const mockModuleData = [
      {
        id: 'facebook',
        maxLength: 100,
        value: 'za warudo!',
        svg: (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
          </svg>
        ),
      },
    ];

    const { container } = render(
      <CharacterLimitMainText module={mockModuleData} />
    );

    expect(container).toBeInTheDocument();
  });

  it('renders correctly without data', () => {
    const { container } = render(<CharacterLimitMainText module={[]} />);

    expect(container).toBeInTheDocument();
  });
});
