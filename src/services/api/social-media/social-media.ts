import { GenericObject } from '~types/object';

import { octopostApi } from '..';

import { Post, SocialMedia } from './social-media.types';

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

  async sendPosts(posts: Post[]): Promise<GenericObject> {
    try {
      const res = await octopostApi.post('/send-posts', { posts });
      return res.data;
    } catch (error) {
      console.error(error);
      return {};
    }
  },
};

export { SocialMediaService };
