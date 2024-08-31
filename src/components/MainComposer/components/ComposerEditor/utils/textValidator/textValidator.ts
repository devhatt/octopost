import { TextValidators } from './textValidators';

import { ComposerEditorProps, TEXT_ERRORS } from '../../ComposerEditor.types';
import {
  Payload,
  Validator,
  ValidatorError,
  Validators,
} from './textValidator.types';

export const textValidator = ({
  text,
  validatorRules,
}: Validator): Validators => {
  const textValidators = new TextValidators(text);

  return {
    textLength: (props: ComposerEditorProps): ValidatorError => {
      const isTextTooLong = !textValidators.textLength(
        validatorRules.maxLength
      );

      const payload: Payload = {
        type: TEXT_ERRORS.MAX_LENGTH_EXCEED,
      };
      if (isTextTooLong && props.accountId && props.postMode) {
        payload.error = {
          accountId: props.accountId,
          message: `Account ${props.accountId} on ${props.postMode.id} type of post overflowed the character limit`,
          postModeId: props.postMode.id,
        };
      }
      return payload;
    },
  };
};
