import { ReactNode } from 'react';

import InputMedia from './InputMedia';

import { TInputMediaTestWrapper } from './InputMedia.types';

export function InputMediaForTest(props: TInputMediaTestWrapper): ReactNode {
  return (
    <InputMedia
      onChange={(media) => {
        props.onChange(media[0].file.name);
      }}
    />
  );
}
