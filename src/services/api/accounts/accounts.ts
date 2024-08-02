import { octopostApi } from '..';

import { Account } from './accounts.types';

const AccountsService = {
  async favorite(
    accountId: Account['id'],
    favorite: boolean
  ): Promise<Account | undefined> {
    try {
      const res = await octopostApi.patch(`accounts/${accountId}`, favorite);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
  async fetchAll(): Promise<Account[]> {
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
