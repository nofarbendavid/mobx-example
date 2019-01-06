import { NetworkStore } from './network.store';

export const networkStore = new NetworkStore();

export interface Stores {
  networkStore: NetworkStore
}

const stores = {
  networkStore
};

export default stores;
