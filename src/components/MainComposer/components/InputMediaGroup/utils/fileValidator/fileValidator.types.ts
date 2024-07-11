import { MediaValidator } from '~services/api/social-media/social-media.types';

import { MediaValidators } from '../mediaValidator/mediaValidators';

import { MediaErrorMap, MediaInput } from '../../InputMediaGroup.type';

export type validators = Record<
  keyof typeof MediaValidators.prototype,
  (
    props: MediaInput,
    errors: MediaErrorMap
  ) => MediaErrorMap | Promise<MediaErrorMap>
>;

export type validatorsProps = {
  media: File;
  validator: MediaValidator;
};
