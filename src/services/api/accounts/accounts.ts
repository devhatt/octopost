import { octopostApi } from '..';

import { Account } from './accounts.types';

const AccountsService = {
  async getAll(): Promise<Account[]> {
    try {
      const res = await octopostApi.get('/accounts');
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
};

export { AccountsService };
