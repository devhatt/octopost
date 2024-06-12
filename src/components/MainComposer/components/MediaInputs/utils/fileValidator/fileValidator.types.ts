import { MediaValidator } from '~services/api/social-media/social-media.types';

import { MediaValidators } from '../mediaValidator/mediaValidators';

import { MediaInput } from '../../MediaInput.type';

export type validators = Record<
  keyof typeof MediaValidators.prototype,
  (props: MediaInput) => void
>;

export type validatorsProps = {
  media: File;
  validator: MediaValidator;
};
