import React, { Component } from 'react';
import {inject, observer} from "mobx-react";
import {Stores} from "../stores";


type Props = {
  startNetwork?:                  (label: string) => void,
  endNetwork?: (label: string) => void,
  networkCount?: number
}

@inject(({ networkStore }: Stores): Props => ({
  networkCount: networkStore.getByLabel('general'),
  startNetwork: networkStore.startNetwork,
  endNetwork: networkStore.endNetwork
}))
@observer
class App extends Component<Props> {

  fireRequest = () => {
    if (this.props.startNetwork) {
      this.props.startNetwork('general');
    }
  };

  endRequest = () => {
    if (this.props.endNetwork) {
      this.props.endNetwork('general');
    }
  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            NetworkCount: { this.props.networkCount }
            <button onClick={this.fireRequest}>Fire</button>
            <button onClick={this.endRequest}>End</button>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer">
              Learn React
            </a>
          </header>
        </div>
    );
  }
}

export default App;
