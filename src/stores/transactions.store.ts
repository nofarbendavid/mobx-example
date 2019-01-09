import {observable, action, runInAction} from 'mobx';
import TransactionsApiService, {ITransactionsApiService} from '../services/transactionsApi.service';

export class TransactionsStore {
  @observable transactions: any[];
  private transactionsApi: ITransactionsApiService;

  constructor() {
    this.transactions = [];
    this.transactionsApi = new TransactionsApiService();
  }

  @action.bound async fetchTransactions(){
    try {
      const transactions = await this.transactionsApi.fetchTransactions();

      runInAction(() => {
        this.setTransactions(transactions as any)
      })
    } catch (e) {
      console.log('e: ', e);
    }
  }

  setTransactions(transactions: any[]) {
    this.transactions = transactions;
  }
}
