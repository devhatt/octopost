import type { Story } from '@ladle/react';

import InputMedia from './InputMedia';

import { InputMediaProps } from './InputMedia.types';

export const InputMediaComponent: Story<InputMediaProps> = (props) => (
  <InputMedia onChange={props.onChange} />
);

InputMediaComponent.args = {
  onChange: (media): void => alert(`image selected ${media[0].file.name}`),
};
