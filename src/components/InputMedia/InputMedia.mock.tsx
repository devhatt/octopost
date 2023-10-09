import InputMedia from './InputMedia';

import { IInputMediaTestWrapper } from './InputMedia.types';

// https://github.com/microsoft/playwright/issues/27439
export function InputMediaForTest(props: IInputMediaTestWrapper) {
  return (
    <InputMedia
      onChange={(media) => {
        props.onChange(media[0].file.name);
      }}
    />
  );
}
