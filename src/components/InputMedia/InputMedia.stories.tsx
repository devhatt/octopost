import type { Story } from '@ladle/react';

import InputMedia from './InputMedia';

import { IInputMediaProps } from './InputMedia.types';

export const InputMediaComponent: Story<IInputMediaProps> = (props) => {
  return <InputMedia onChange={props.onChange} />;
};

InputMediaComponent.args = {
  onChange: (media) => alert(`image selected ${media[0].file.name}`),
};
