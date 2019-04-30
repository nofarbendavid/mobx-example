import React, { lazy, Suspense } from 'react';
import { ThemeProvider } from 'emotion-theming';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router';
import { Provider } from 'mobx-react';
import stores from 'stores';

import theme from 'constants/themes.constants';

import Localization from 'components/localization'; // TODO: remove if no localization
import Layout from 'components/layout/layout';
import Sample from 'sample/sample'; // TODO: replace this with actual component

const LazyRoute = lazy(() => import('sample/lazy'));

class App extends React.Component<{}> {
  render() {
    return (
      <Provider {...stores}>
        <Localization>
          <ThemeProvider theme={theme}>
            <BrowserRouter>
              <Layout>
                <Suspense fallback={<div>Loading...</div>}>
                  <Route exact path="/" name="sample" component={Sample} />
                  <Route path="/lazy" name="lazy" component={LazyRoute} />
                </Suspense>
              </Layout>
            </BrowserRouter>
          </ThemeProvider>
        </Localization>
      </Provider>
    );
  }
}

export default App;
