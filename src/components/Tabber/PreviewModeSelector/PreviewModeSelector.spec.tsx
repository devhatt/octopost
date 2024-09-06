import { ChangeEvent } from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IconsType } from '~components/Icon/Icon.types';

import { PreviewMode } from './PreviewModeSelector.components';

describe('PreviewModeSelector', () => {
  const item = {
    icon: 'pc' as IconsType,
    id: 'some-id',
    name: 'some-name',
  };
  let getTargetValue: (e: ChangeEvent<HTMLInputElement>) => string;

  beforeEach(() => {
    getTargetValue = (e: ChangeEvent<HTMLInputElement>): string =>
      e.target.value;
  });

  describe('PreviewMode', () => {
    it('render the icons when passed', () => {
      render(<PreviewMode item={item} onSelect={getTargetValue} />);

      const icon = screen.getByRole('img');

      expect(icon).toBeInTheDocument();
    });

    it('When clicked, it  change to checked', async () => {
      render(<PreviewMode item={item} onSelect={getTargetValue} />);

      const inputElement = screen.getByRole('radio', { name: 'some-name' });

      await userEvent.click(inputElement);

      expect(inputElement).toBeChecked();
    });

    it('changes the background when clicked', async () => {
      render(<PreviewMode item={item} onSelect={getTargetValue} />);

      const inputElement = screen.getByRole('radio', { name: 'some-name' });

      await userEvent.click(inputElement);

      expect(getComputedStyle(inputElement).backgroundColor).toBe(
        'rgb(255, 255, 255)'
      );
    });
  });
});
