import { MediaValidators } from '../mediaValidator/mediaValidators';

import { MEDIA_ERRORS, MediaInputProps } from '../../InputMediaGroup.type';
import {
  Payload,
  Validator,
  ValidatorError,
  Validators,
} from './fileValidator.types';

export const fileValidators = ({
  media,
  validatorRules,
}: Validator): Validators => {
  const mediaValidator = new MediaValidators(media);
  return {
    aspectRatio: async (
      props: MediaInputProps,
      fileName: string
    ): Promise<ValidatorError> => {
      const arChecks = await Promise.all(
        validatorRules.ar.map(async (ar) => mediaValidator.aspectRatio(ar))
      );
      const allError = arChecks.every((valid) => !valid);
      const payload: Payload = {
        type: MEDIA_ERRORS.MAX_AR_EXCEED,
      };
      if (props.addError && allError) {
        payload.error = {
          accountId: props.accountId,
          message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the aspect ratio limit in ${fileName}`,
          postModeId: props.postMode?.id,
        };
      }
      return payload;
    },

    duration: async (
      props: MediaInputProps,
      fileName: string
    ): Promise<ValidatorError> => {
      const isDurationTooLong =
        props.addError &&
        !(await mediaValidator.duration(validatorRules.maxDuration));
      const payload: Payload = {
        type: MEDIA_ERRORS.MAX_DURATION_EXCEED,
      };

      if (isDurationTooLong) {
        payload.error = {
          accountId: props.accountId,
          message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the duration limit in ${fileName}`,
          postModeId: props.postMode?.id,
        };
      }
      return payload;
    },

    resolution: async (
      props: MediaInputProps,
      fileName: string
    ): Promise<ValidatorError> => {
      const isResolutionTooLong =
        props.addError &&
        !(await mediaValidator.resolution(
          validatorRules.maxWidth,
          validatorRules.maxHeight
        ));
      const payload: Payload = {
        type: MEDIA_ERRORS.MAX_RESOLUTION_EXCEED,
      };

      if (isResolutionTooLong) {
        payload.error = {
          accountId: props.accountId,
          message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the resolution limit in ${fileName}`,
          postModeId: props.postMode?.id,
        };
      }
      return payload;
    },

    size: (props: MediaInputProps, fileName: string): ValidatorError => {
      const isSizeTooLong =
        props.addError && !mediaValidator.size(validatorRules.maxFileSize);
      const payload: Payload = {
        type: MEDIA_ERRORS.MAX_SIZE_EXCEED,
      };
      if (isSizeTooLong) {
        payload.error = {
          accountId: props.accountId,
          message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the size limit in ${fileName}`,
          postModeId: props.postMode?.id,
        };
      }
      return payload;
    },
  };
};
