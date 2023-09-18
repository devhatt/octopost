import type { Story } from '@ladle/react';

import InputMedia from './InputMedia';

import { IInputMedia } from './InputMedia.types';

export const InputMediaComponent: Story<IInputMedia> = (props) => {
  return <InputMedia onChange={props.onChange} />;
};

InputMediaComponent.args = {
  onChange: (media) => alert(`image selected ${media.name}`),
};
