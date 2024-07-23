import { MediaValidators } from '../mediaValidator/mediaValidators';

import { MEDIA_ERRORS, MediaInput } from '../../InputMediaGroup.type';
import {
  ValidatorError,
  validators,
  validatorsProps,
} from './fileValidator.types';

export const fileValidators = ({
  media,
  validator,
}: validatorsProps): validators => {
  const mediaValidator = new MediaValidators(media);
  return {
    aspectRatio: async (
      props: MediaInput,
      fileName: string
    ): Promise<ValidatorError> => {
      const arChecks = await Promise.all(
        validator.ar.map(async (ar) => mediaValidator.aspectRatio(ar))
      );
      const allError = arChecks.every((valid) => !valid);
      if (props.addError && allError) {
        return {
          error: {
            accountId: props.accountId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the aspect ratio limit in ${fileName}`,
            postModeId: props.postMode?.id,
          },
          type: MEDIA_ERRORS.MAX_AR_EXCEED,
        };
      } else {
        return {
          type: MEDIA_ERRORS.MAX_AR_EXCEED,
        };
      }
    },

    duration: async (
      props: MediaInput,
      fileName: string
    ): Promise<ValidatorError> => {
      if (
        props.addError &&
        !(await mediaValidator.duration(validator.maxDuration))
      ) {
        return {
          error: {
            accountId: props.accountId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the duration limit in ${fileName}`,
            postModeId: props.postMode?.id,
          },
          type: MEDIA_ERRORS.MAX_DURATION_EXCEED,
        };
      } else {
        return {
          type: MEDIA_ERRORS.MAX_DURATION_EXCEED,
        };
      }
    },

    resolution: async (
      props: MediaInput,
      fileName: string
    ): Promise<ValidatorError> => {
      if (
        props.addError &&
        !(await mediaValidator.resolution(
          validator.maxWidth,
          validator.maxHeight
        ))
      ) {
        return {
          error: {
            accountId: props.accountId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the resolution limit in ${fileName}`,
            postModeId: props.postMode?.id,
          },
          type: MEDIA_ERRORS.MAX_RESOLUTION_EXCEED,
        };
      } else {
        return {
          type: MEDIA_ERRORS.MAX_RESOLUTION_EXCEED,
        };
      }
    },

    size: (props: MediaInput, fileName: string): ValidatorError => {
      if (props.addError && !mediaValidator.size(validator.maxFileSize)) {
        return {
          error: {
            accountId: props.accountId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the size limit in ${fileName}`,
            postModeId: props.postMode?.id,
          },
          type: MEDIA_ERRORS.MAX_SIZE_EXCEED,
        };
      } else {
        return {
          type: MEDIA_ERRORS.MAX_SIZE_EXCEED,
        };
      }
    },
  };
};
