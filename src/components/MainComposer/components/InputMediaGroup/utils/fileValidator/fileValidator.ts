import { MediaValidators } from '../mediaValidator/mediaValidators';

import { MediaInput } from '../../InputMediaGroup.type';
import { validators, validatorsProps } from './fileValidator.types';

export const fileValidators = ({
  media,
  validator,
}: validatorsProps): validators => {
  const mediaValidator = new MediaValidators(media);
  return {
    aspectRatio: async (props: MediaInput): Promise<void> => {
      const arChecks = await Promise.all(
        validator.media.ar.map(async (ar) => mediaValidator.aspectRatio(ar))
      );
      const allError = arChecks.every((valid) => !valid);
      if (props.onError && allError) {
        props.onError({
          accountId: props.accountId,
          message: 'Invalid file aspectRatio',
          postModeId: props.postMode?.id,
        });
      }
    },

    duration: async (props: MediaInput): Promise<void> => {
      if (
        props.onError &&
        !(await mediaValidator.duration(validator.media.maxDuration))
      ) {
        props.onError({
          accountId: props.accountId,
          message: 'Invalid video duration',
          postModeId: props.postMode?.id,
        });
      }
    },

    resolution: async (props: MediaInput): Promise<void> => {
      if (
        props.onError &&
        !(await mediaValidator.resolution(
          validator.media.maxWidth,
          validator.media.maxHeight
        ))
      ) {
        props.onError({
          accountId: props.accountId,
          message: 'Invalid file resolution',
          postModeId: props.postMode?.id,
        });
      }
    },

    size: (props: MediaInput): void => {
      if (props.onError && !mediaValidator.size(validator.media.maxFileSize)) {
        props.onError({
          accountId: props.accountId,
          message: 'Invalid file size',
          postModeId: props.postMode?.id,
        });
      }
    },
  };
};
