import type { Story } from '@ladle/react';

import InputMediaButton from './InputMediaButton';

import { IInputMediaButtonProps } from './InputMediaButton.types';

export const InputMediaButtonComponent: Story<IInputMediaButtonProps> = (
  props
) => <InputMediaButton onChange={props.onChange} />;

InputMediaButtonComponent.args = {
  onChange: (media) => alert(`image selected ${media[0].file.name}`),
};
