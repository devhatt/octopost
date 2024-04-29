import { octopostApi } from '..';

import { SocialMedia } from './social-media.types';

const SocialMediaService = {
  async fetch(socialMedias: string[]): Promise<SocialMedia[]> {
    try {
      const res = await octopostApi.get('/social-medias', {
        params: { socialMedias },
      });
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export { SocialMediaService };
