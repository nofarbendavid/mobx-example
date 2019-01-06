import React, { Component, lazy, FunctionComponent, Suspense } from 'react';
import { inject, observer } from 'mobx-react';
import { Stores } from '../stores';
import styled from '@emotion/styled';

const LargeText = styled.p`
  color: ${props => props.color};
  font-size: 24px;
`;

type Props = {
  startNetwork?: (label: string) => void;
  endNetwork?: (label: string) => void;
  networkCount?: number;
};

@inject(
  ({ networkStore }: Stores): Props => ({
    networkCount: networkStore.getByLabel('general'),
    startNetwork: networkStore.startNetwork,
    endNetwork: networkStore.endNetwork
  })
)
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
          <Suspense fallback={<div>Loader</div>}>
            <LargeText color="blue">
              Edit <code>src/App.tsx</code> and save to reload.
            </LargeText>
          </Suspense>
          NetworkCount: {this.props.networkCount}
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
