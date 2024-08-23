import { MainComposerChildrens } from '../MainComposerBase/MainComposerBase.type';

export type MediaInputProps = MainComposerChildrens;

export enum MEDIA_ERRORS {
  MAX_AR_EXCEED = 1,
  MAX_DURATION_EXCEED = 2,
  MAX_RESOLUTION_EXCEED = 3,
  MAX_SIZE_EXCEED = 4,
}

export type ErrorMap = Record<MEDIA_ERRORS, string>;

export type MediaErrorMap = Record<string, ErrorMap>;
