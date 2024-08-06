import { MediaValidator } from '~services/api/social-media/social-media.types';

import { MediaValidators } from '../mediaValidator/mediaValidators';

import { Error } from '~components/MainComposer/components/MainComposerBase/MainComposerBase.type';

import { MEDIA_ERRORS, MediaInput } from '../../InputMediaGroup.type';

export type ValidatorError = {
  error?: Error;
  type: MEDIA_ERRORS;
};

export type validators = Record<
  keyof typeof MediaValidators.prototype,
  (
    props: MediaInput,
    fileId: string
  ) => Promise<ValidatorError> | ValidatorError
>;

export type validatorsProps = {
  media: File;
  validator: MediaValidator;
};
