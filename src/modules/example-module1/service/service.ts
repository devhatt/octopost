/* eslint-disable @typescript-eslint/no-unused-vars */
import { IPublishResponse, IService } from 'modules/types';
function fakeApiCall(data: unknown, delay = 1000) {
  // Simulate an API call with a delay using a Promise
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, delay);
  });
}

export class Service implements IService {
  async publish(
    text: string,
    image: File[],
    customOpts: string
  ): Promise<IPublishResponse> {
    try {
      const response = await fakeApiCall(
        { message: 'This is fake data' },
        2000
      );
      // console.log('API Response:', response);
      return {
        status: 200,
      };
    } catch (error) {
      // console.error('API Error:', error);
      return {
        status: 500,
      };
    }
  }
}
