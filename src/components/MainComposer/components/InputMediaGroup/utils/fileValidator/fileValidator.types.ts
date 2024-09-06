import { MediaValidator } from '~services/api/social-media/social-media.types';

import { MediaValidators } from '../mediaValidator/mediaValidators';

import { Error } from '~components/MainComposer/components/MainComposerBase/MainComposerBase.type';

import { MEDIA_ERRORS, MediaInputProps } from '../../InputMediaGroup.type';

export type ValidatorError = {
  error?: Error;
  type: MEDIA_ERRORS;
};

export type Validators = Record<
  keyof typeof MediaValidators.prototype,
  (
    props: MediaInputProps,
    fileId: string
  ) => Promise<ValidatorError> | ValidatorError
>;

export type Validator = {
  media: File;
  validatorRules: MediaValidator;
};

export type Payload = {
  error?: Error;
  type: MEDIA_ERRORS;
};
