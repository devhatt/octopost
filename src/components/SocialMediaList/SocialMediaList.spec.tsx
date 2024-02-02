import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import SocialMediaList from './SocialMediaList';

const mock = [
  { icon: <svg />, id: 1, name: 'Facebook' },
  { icon: <svg />, id: 2, name: 'Twitter' },
  { icon: <svg />, id: 3, name: 'Instagram' },
];

describe('SocialMediaList', () => {
  it('renders empty tags placeholder when no tags are added', () => {
    render(<SocialMediaList tags={[]} />);
    const placeholderText = screen.getByText('Select Social Account');
    expect(placeholderText).toBeInTheDocument();
  });

  it('renders tags when the tags array is filled', () => {
    render(<SocialMediaList tags={mock} />);

    const tags = screen.getAllByTestId('tag');
    expect(tags).toHaveLength(mock.length);
  });

  it('should remove a tag when the remove button is clicked', async () => {
    render(<SocialMediaList tags={mock} />);
    const zero = 0;

    const tags = screen.getAllByTestId('tag');
    const removeButton = within(tags[zero]).getByRole('button');
    await userEvent.click(removeButton);

    expect(tags[zero]).not.toBeInTheDocument();
  });
});
