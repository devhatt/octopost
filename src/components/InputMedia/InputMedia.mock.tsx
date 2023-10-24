import InputMedia from './InputMedia';

import { IInputMediaTestWrapper } from './InputMedia.types';

/*
 *playwright's tests runs on the server and in a real browser,
 *because of that he can only pass as props primitives types.
 *This wrapper takes the file's name and passes to the component so it can be used on test*
 *github.com/microsoft/playwright/issues/27439
 */

export function InputMediaForTest(props: IInputMediaTestWrapper) {
  return (
    <InputMedia
      onChange={(media) => {
        props.onChange(media[0].file.name);
      }}
    />
  );
}
