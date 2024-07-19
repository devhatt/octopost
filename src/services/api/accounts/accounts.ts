import { octopostApi } from '..';

import { Account } from './accounts.types';

const AccountsService = {
  async fetchAll(): Promise<Account[]> {
    try {
      const res = await octopostApi.get('/accounts');
      return res.data;
    } catch (error) {
      console.error(error);
      return [];
    }
  },
  async update(account: Account): Promise<Account | undefined> {
    try {
      const res = await octopostApi.post(`account/${account.id}`, account);
      return res.data;
    } catch (error) {
      console.error(error);
    }
  },
};

export { AccountsService };
