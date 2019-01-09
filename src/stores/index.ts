import { NetworkStore } from './network.store';
import { TransactionsStore } from './transactions.store';

export const networkStore = new NetworkStore();
export const transactionsStore = new TransactionsStore();

export interface Stores {
  networkStore: NetworkStore,
  transactionsStore: TransactionsStore
}

const stores = {
  networkStore,
  transactionsStore
};

export default stores;
