import { action, observable } from 'mobx';

export class NetworkStore {
  @observable requests: Map<string, number> = new Map();

  @action.bound startNetwork(label: string) {
    const requestCount: number = this.requests.get(label) || 0;

    this.requests.set(label, requestCount + 1);
  }

  @action.bound endNetwork(label: string) {
    const requestCount: number = this.requests.get(label) || 0;

    if (requestCount < 1) {
      return;
    }

    this.requests.set(label, requestCount - 1);
  }

  getByLabel(label: string): number {
    const requestCount: number = this.requests.get(label) || 0;

    return requestCount;
  }

  isLoading(label: string): boolean {
    const requestCount: number = this.requests.get(label) || 0;

    return requestCount > 0;
  }
}
