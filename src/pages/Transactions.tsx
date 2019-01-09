import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { Stores } from '../stores';

interface ITransactionsProps {
  transactions: any[];
  fetchTransactions: () => void;
}

@inject(
  ({ transactionsStore }: Stores): ITransactionsProps => ({
    transactions: transactionsStore.transactions,
    fetchTransactions: transactionsStore.fetchTransactions
  })
)
@observer
class Transactions extends Component<ITransactionsProps> {
  componentDidMount() {
    this.props.fetchTransactions();
  }

  render() {
    return this.props.transactions.map((transaction: any) => (
      <div key={transaction.id}>{transaction.title}</div>
    ));
  }
}

export default Transactions;
