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
      fileId: string
    ): Promise<ValidatorError> => {
      const arChecks = await Promise.all(
        validator.media.ar.map(async (ar) => mediaValidator.aspectRatio(ar))
      );
      const allError = arChecks.every((valid) => !valid);
      if (props.addError && allError) {
        return {
          error: {
            accountId: props.accountId,
            fileId: fileId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the aspect ratio limit`,
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
      fileId: string
    ): Promise<ValidatorError> => {
      if (
        props.addError &&
        !(await mediaValidator.duration(validator.media.maxDuration))
      ) {
        return {
          error: {
            accountId: props.accountId,
            fileId: fileId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the duration limit`,
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
      fileId: string
    ): Promise<ValidatorError> => {
      if (
        props.addError &&
        !(await mediaValidator.resolution(
          validator.media.maxWidth,
          validator.media.maxHeight
        ))
      ) {
        return {
          error: {
            accountId: props.accountId,
            fileId: fileId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the resolution limit`,
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

    size: (props: MediaInput, fileId: string): ValidatorError => {
      if (props.addError && !mediaValidator.size(validator.media.maxFileSize)) {
        return {
          error: {
            accountId: props.accountId,
            fileId: fileId,
            message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the size limit`,
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
