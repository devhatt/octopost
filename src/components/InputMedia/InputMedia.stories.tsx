import type { Story } from '@ladle/react';

import InputMedia from './InputMedia';

import { IInputMedia } from './InputMedia.types';

export const InputMediaComponent: Story<IInputMedia> = (props) => {
  return <InputMedia variant={props.variant} />;
};

InputMediaComponent.args = {
  variant: false,
};
