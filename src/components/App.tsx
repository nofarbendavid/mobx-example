import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';
import { Route, Redirect } from 'react-router';
import { Provider } from 'mobx-react';
import stores from 'stores';
import theme from 'constants/themes.constants';
import IssuesList from 'components/IssuesList';

class App extends React.Component<{}> {
  render() {
    return (
      <Provider {...stores}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Route
              exact
              path="/"
              render={() => <Redirect to="/facebook/react/issues" />}
            />
            <Route exact path="/facebook/react/issues" component={IssuesList} />
          </BrowserRouter>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
