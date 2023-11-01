import { IPublishResponse, IService } from 'modules/types';

import { TGenericObject } from '~types/object';

// import { createTweetRequest } from '../../../electron/renderer';

export class TwitterService implements IService {
  async publish(
    text: string,
    images?: File[],
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    customOpts?: TGenericObject
  ): Promise<IPublishResponse> {
    try {
      const responseStatus = await window.serverCalls.createTweet({
        text,
        images,
      });
      // eslint-disable-next-line no-console
      console.log('[Twitter Response]:', responseStatus);
      return {
        status: responseStatus,
      };
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('[Twitter Response Error]:', error);
      return {
        status: 500,
      };
    }
  }
}
