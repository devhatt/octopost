import { TextValidators } from './textValidators';

import { ComposerEditorProps, TEXT_ERRORS } from '../../ComposerEditor.types';
import {
  ValidatorError,
  validators,
  validatorsProps,
} from './textValidator.types';

export const textValidator = ({
  text,
  validator,
}: validatorsProps): validators => {
  const textValidators = new TextValidators(text);

  return {
    textLength: (props: ComposerEditorProps): ValidatorError => {
      const isTextTooLong =
        props.postMode && !textValidators.textLength(validator.maxLength);

      if (isTextTooLong) {
        return {
          error: {
            accountId: props.accountId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the character limit`,
            postModeId: props.postMode?.id,
          },
          type: TEXT_ERRORS.MAX_LENGTH_EXCEED,
        };
      } else {
        return {
          type: TEXT_ERRORS.MAX_LENGTH_EXCEED,
        };
      }
    },
  };
};
