import InputMediaButton from './InputMediaButton';

import { IInputMediaButtonTestWrapper } from './InputMediaButton.types';

/*
 *playwright's tests runs on the server and in a real browser,
 *because of that he can only pass as props primitives types.
 *This wrapper takes the file's name and passes to the component so it can be used on test*
 *github.com/microsoft/playwright/issues/27439
 */

export function InputMediaButtonForTest(props: IInputMediaButtonTestWrapper) {
  return (
    <InputMediaButton
      onChange={(media) => {
        props.onChange(media[0].file.name);
      }}
    />
  );
}
