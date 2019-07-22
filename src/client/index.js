/* global window document */

import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux'
import { ThemeProvider } from '@material-ui/styles'; // eslint-disable-line

import routes from '../routes';
import theme from '../theme';
import App from '../common/components/App';
import configureStore from '../common/store/configureStore';

const data = window._INITIAL_DATA_;
const store = configureStore(window.__PRELOADED_STATE__); // eslint-disable-line

const Main = () => {
  useEffect(() => {
    const styles = document.querySelector('#jss-server-side');

    if (styles) {
      styles.parentNode.removeChild(styles);
    }
  });

  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App routes={routes} initialData={data} />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}


hydrate(<Main />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === 'production') {
  const options = {};
  require('../sw')(options);
}
