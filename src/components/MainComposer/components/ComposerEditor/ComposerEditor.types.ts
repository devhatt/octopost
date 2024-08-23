import { ChangeEvent, PropsWithChildren } from 'react';

import { MainComposerChildrens } from '../MainComposerBase/MainComposerBase.type';

export type InputChange = (event: ChangeEvent<HTMLTextAreaElement>) => void;

export type ComposerEditorProps = MainComposerChildrens &
  PropsWithChildren<{
    currentMaxLimit?: number;
    onChange?: InputChange;
    value?: string;
  }>;

export type HigherLimitSocial = {
  limit: number;
  socialMediaId: string;
};

export enum TEXT_ERRORS {
  MAX_LENGTH_EXCEED = 1,
}

export type TextErrorMap = Partial<Record<TEXT_ERRORS, string>>;
