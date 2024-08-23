import { TextValidator } from '~services/api/social-media/social-media.types';

import { TextValidators } from './textValidators';

import { Error } from '~components/MainComposer/components/MainComposerBase/MainComposerBase.type';

import { ComposerEditorProps, TEXT_ERRORS } from '../../ComposerEditor.types';

export type Validators = Record<
  keyof typeof TextValidators.prototype,
  (props: ComposerEditorProps) => ValidatorError
>;

export type Validator = {
  text: string;
  validatorRules: TextValidator;
};

export type ValidatorError = {
  error?: Error;
  type: TEXT_ERRORS;
};

export type Payload = {
  error?: Error;
  type: TEXT_ERRORS;
};
