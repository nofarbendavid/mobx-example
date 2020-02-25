import { NetworkStore } from './network.store';
import { IssuesStore }  from 'stores/issues.store';

export const networkStore = new NetworkStore();
export const issuesStore = new IssuesStore();

export interface Stores {
  networkStore: NetworkStore,
  issuesStore: IssuesStore
}

const stores = {
  networkStore,
  issuesStore
};

export default stores;
