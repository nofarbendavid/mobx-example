import { apiRequest } from '../utils/api';

export interface ITransactionsApiService {
  fetchTransactions: () => any;
}

export class TransactionsApiService {

  public fetchTransactions<T>(): Promise<Response> {
    return apiRequest({ url: 'https://jsonplaceholder.typicode.com/posts' });
  }

}

export default TransactionsApiService;