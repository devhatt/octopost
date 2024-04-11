import { nanoid } from 'nanoid';

import { GenericObject } from '~types/object';

const DATABASE_VERSION = 1;

class AccountDatabase {
  private static instance: AccountDatabase;
  private readonly db: IDBDatabase | null = null;
  private readonly dbRequest: IDBOpenDBRequest;
  private readonly objectStore: GenericObject<IDBObjectStore> = {};

  private constructor() {
    this.dbRequest = window.indexedDB.open('OctoAccounts', DATABASE_VERSION);

    this.dbRequest.addEventListener('error', this.dbOpenError);
    this.dbRequest.addEventListener('upgradeneeded', this.runMigrations);
    this.dbRequest.addEventListener('success', this.dbOpenSuccess);
  }

  public static getInstance(): AccountDatabase {
    if (!AccountDatabase.instance) {
      AccountDatabase.instance = new AccountDatabase();
    }
    return AccountDatabase.instance;
  }

  public readonly add = (data: GenericObject): void => {
    const id = nanoid();
    console.log('Adding account', id, data);
    const object = { id, ...data };

    this.initTransactions();

    this.objectStore.accounts.put(object);
  };

  public readonly getAllFrom = async (moduleId: string): Promise<any> => new Promise((resolve, reject) => {
      this.initTransactions();
  
      const request = this.objectStore.accounts.index('moduleId').getAll(moduleId);
  
      request.onsuccess = function(event) {
        resolve(request.result);
      };
  
      request.onerror = function(event) {
        reject(request.error);
      };
    });

  private readonly runMigrations = (): void => {
    console.log('Running migrations...');
    const db = this.dbRequest.result;

    db.addEventListener('error', this.dbError);
    this.objectStore.accounts = db.createObjectStore('accounts', {
      keyPath: 'id',
    });

    this.objectStore.accounts.createIndex("moduleId", "moduleId", { unique: false });
  };

  private readonly dbError = (e: Event): void => {
    console.error('Error using database', this.db, e);
  };

  private readonly dbOpenError = (e: Event): void => {
    console.error('Error opening database', this.db, e);
  };

  private readonly dbOpenSuccess = (): void => {
    console.log('Success opening database', this.db);
  };

  private readonly transactionError = (e: Event): void => {
    console.error('Error on transaction accounts', this.db, e);
  };

  private readonly transactionSuccess = (e: Event): void => {
    console.log('Success on transaction accounts', this.db, e);
  };

  private readonly initTransactions = (): void => {
    const transaction = this.dbRequest.result.transaction(
      'accounts',
      'readwrite'
    );

    transaction.addEventListener('error', this.transactionError);
    transaction.addEventListener('complete', this.transactionSuccess);

    this.objectStore.accounts = transaction.objectStore('accounts');
  };
}

export const accountDatabase = AccountDatabase.getInstance();
