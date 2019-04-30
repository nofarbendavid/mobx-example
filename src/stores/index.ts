import { NetworkStore } from './network.store';
import { PostsStore } from '../sample/sample.store';
import { LocalizationStore } from './localization.store';

export const networkStore = new NetworkStore();
export const localizationStore = new LocalizationStore();
export const postsStore = new PostsStore(); // TODO: Sample only. Remove This

export interface Stores {
  networkStore: NetworkStore,
  localizationStore: LocalizationStore,
  postsStore: PostsStore
}

const stores = {
  networkStore,
  localizationStore,
  postsStore
};

export default stores;
