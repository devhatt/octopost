import type { GenericObject } from '~/utils/primitives';

export interface PublishResponse {}

export interface Service {
  publish: (
    text: string,
    image: File[],
    customOpts: GenericObject
  ) => Promise<PublishResponse>;
}
