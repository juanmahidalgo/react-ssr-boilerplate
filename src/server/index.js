import React from 'react';
import { StaticRouter, matchPath } from 'react-router-dom';
import express from 'express';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { ThemeProvider, ServerStyleSheets } from '@material-ui/styles';

import './interceptors';
import theme from '../theme';
import routes from '../routes';
import api from './routes';
import App from '../common/components/App';
import configureStore from '../common/store/configureStore';

const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);
const sheets = new ServerStyleSheets();

const server = express();
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  })
  .use('/api', api)
  .get('/*', (req, res) => {
    const matches = routes.map((route) => {
      const match = matchPath(req.url, route.path, route);
      if (match && match.isExact) {
        const obj = {
          route,
          match,
          promise: route.component.getInitialData
            ? route.component.getInitialData({ match, req, res })
            : Promise.resolve(null),
        };
        return obj;
      }
      return null;
    });

    if (matches.length === 0) {
      res.status(404).send('Not Found');
    }

    const promises = matches.map(match => (match ? match.promise : null));
    const store = configureStore({});

    // We block rendering until all promises have resolved
    Promise.all(promises)
      .then(data => {
        const context = {};

        // Pass our routes and data array to our App component
        const markup = renderToString(
          sheets.collect(
            <Provider store={store}>
              <ThemeProvider theme={theme}>
                <StaticRouter context={context} location={req.url}>
                  <App routes={routes} initialData={data.length ? [...data] : data} />
                </StaticRouter>
              </ThemeProvider>
            </Provider>
          )
        );

        const css = sheets.toString();

        if (context.url) {
          res.redirect(context.url);
        } else {
          res.status(context.statusCode || 200).send(
            `<!doctype html>
          <html lang="">
          <head>
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              <meta charSet='utf-8' />
              <title>React Challenge</title>
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <style id="jss-server-side">${css}</style>
              ${assets.client.css
              ? `<link rel="stylesheet" href="${assets.client.css}">`
              : ''}
              <script src="${assets.client.js}" defer></script>
          </head>
          <body> 
              <div id="root">${markup}</div>
              <script>window._INITIAL_DATA_ = ${JSON.stringify(data)};</script>
          </body>
      </html>`
          );
        }
      })
      .catch(error => {
        res.status(500).json({ error: error.message, stack: error.stack });
      });
  });

export default server;

