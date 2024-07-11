import { nanoid } from 'nanoid';

import { MediaValidators } from '../mediaValidator/mediaValidators';

import { Action } from '~components/MainComposer/components/MainComposerBase/MainComposerBase.type';

import {
  MEDIA_ERRORS,
  MediaErrorMap,
  MediaInput,
} from '../../InputMediaGroup.type';
import { validators, validatorsProps } from './fileValidator.types';

const removeErrors = (
  mediaErrors: MEDIA_ERRORS,
  errors: MediaErrorMap,
  props: MediaInput
): MediaErrorMap => {
  const newError = { ...errors };
  const errorId = newError[mediaErrors];
  const updateErrors = Object.entries(newError).reduce<MediaErrorMap>(
    (acc, [key, value]) => {
      acc[key as unknown as MEDIA_ERRORS] = value;
      return acc;
    },
    {}
  );
  props.removeError?.(errorId);
  return updateErrors;
};

export const fileValidators = ({
  media,
  validator,
}: validatorsProps): validators => {
  const mediaValidator = new MediaValidators(media);
  return {
    aspectRatio: async (
      props: MediaInput,
      errors: MediaErrorMap
    ): Promise<MediaErrorMap> => {
      const arChecks = await Promise.all(
        validator.media.ar.map(async (ar) => mediaValidator.aspectRatio(ar))
      );
      const allError = arChecks.every((valid) => !valid);
      if (props.addError && allError) {
        const errorId = nanoid();
        props.addError(errorId, {
          accountId: props.accountId,
          action: Action.APPLY_ERROR,
          message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the aspect ratio limit`,
          postModeId: props.postMode?.id,
        });
        return { ...errors, [MEDIA_ERRORS.MAX_AR_EXCEED]: errorId };
      } else {
        return removeErrors(MEDIA_ERRORS.MAX_AR_EXCEED, errors, props);
      }
    },

    duration: async (
      props: MediaInput,
      errors: MediaErrorMap
    ): Promise<MediaErrorMap> => {
      if (
        props.addError &&
        !(await mediaValidator.duration(validator.media.maxDuration))
      ) {
        const errorId = nanoid();
        props.addError(errorId, {
          accountId: props.accountId,
          action: Action.APPLY_ERROR,
          message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the duration limit`,
          postModeId: props.postMode?.id,
        });

        return { ...errors, [MEDIA_ERRORS.MAX_DURATION_EXCEED]: errorId };
      } else {
        return removeErrors(MEDIA_ERRORS.MAX_DURATION_EXCEED, errors, props);
      }
    },

    resolution: async (
      props: MediaInput,
      errors: MediaErrorMap
    ): Promise<MediaErrorMap> => {
      if (
        props.addError &&
        !(await mediaValidator.resolution(
          validator.media.maxWidth,
          validator.media.maxHeight
        ))
      ) {
        const errorId = nanoid();
        props.addError(errorId, {
          accountId: props.accountId,
          action: Action.APPLY_ERROR,
          message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the resolution limit`,
          postModeId: props.postMode?.id,
        });

        return { ...errors, [MEDIA_ERRORS.MAX_RESOLUTION_EXCEED]: errorId };
      } else {
        return removeErrors(MEDIA_ERRORS.MAX_RESOLUTION_EXCEED, errors, props);
      }
    },

    size: (props: MediaInput, errors: MediaErrorMap): MediaErrorMap => {
      if (props.addError && !mediaValidator.size(validator.media.maxFileSize)) {
        const errorId = nanoid();
        props.addError(errorId, {
          accountId: props.accountId,
          action: Action.APPLY_ERROR,
          message: `Account ${props.accountId} on ${props.postMode?.id} type of post overflowed the size limit`,
          postModeId: props.postMode?.id,
        });

        return { ...errors, [MEDIA_ERRORS.MAX_SIZE_EXCEED]: errorId };
      } else {
        return removeErrors(MEDIA_ERRORS.MAX_SIZE_EXCEED, errors, props);
      }
    },
  };
};
