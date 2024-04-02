import { ReactNode } from 'react';

import InputMedia from './InputMedia';

import { IInputMediaTestWrapper } from './InputMedia.types';

/*
 * Playwright's tests execute both on the server and in a real browser.
 * Due to this constraint, props should be primitive types.
 * This wrapper receives the file name and forwards it to the component for testing purposes.
 * Refer to github.com/microsoft/playwright/issues/27439 for details.
 */

export function InputMediaForTest(props: IInputMediaTestWrapper): ReactNode {
  return (
    <InputMedia
      onChange={(media) => {
        props.onChange(media[0].file.name);
      }}
    />
  );
}
