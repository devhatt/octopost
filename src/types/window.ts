import { ICreatePost } from 'modules/types';

declare global {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  interface Window {
    serverCalls: {
      createTweet: (data: ICreatePost) => Promise<number>;
    };
  }
}
