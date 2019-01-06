import React, { Component, lazy } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const Transactions = lazy(() => import('../pages/Transactions'));

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Transactions} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
