import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { changeDevice } from '../utils';

import { IconsType } from '~components/Icon/Icon.types';

import { PreviewMode } from './PreviewModeSelector.components';

describe('PreviewModeSelector', () => {
  const item = {
    icon: 'pc' as IconsType,
    id: 'some-id',
    name: 'some-name',
  };

  describe('PreviewMode', () => {
    it('[Icon] should render the icons', () => {
      render(<PreviewMode item={item} onSelect={changeDevice} />);

      const icon = screen.getByRole('img');

      expect(icon).toBeInTheDocument();
    });

    it('[Icon] When clicked, it should change to checked', async () => {
      render(<PreviewMode item={item} onSelect={changeDevice} />);

      const inputElement = screen.getByRole('radio', { name: 'some-name' });

      await userEvent.click(inputElement);

      expect(inputElement).toBeChecked();
    });

    it('[Icon] When clicked, it should change to background', async () => {
      render(<PreviewMode item={item} onSelect={changeDevice} />);

      const inputElement = screen.getByRole('radio', { name: 'some-name' });

      await userEvent.click(inputElement);

      expect(getComputedStyle(inputElement).backgroundColor).toBe(
        'rgb(255, 255, 255)'
      );
    });
  });
});
