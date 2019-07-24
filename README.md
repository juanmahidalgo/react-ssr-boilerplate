# News app

[See it in action](https://react-news.juanma06.now.sh)

An App that shows news (Razzle+React+Redux).

A [Razzle ♥](https://github.com/jaredpalmer/razzle) based project.

Some Packages / Libraries used:

* [Razzle](https://github.com/jaredpalmer/razzle): [MIT License](https://github.com/jaredpalmer/razzle/blob/master/LICENSE)
* [React](https://github.com/facebook/react): [BSD License](https://github.com/facebook/react/blob/master/LICENSE)
* [Redux](https://github.com/reactjs/redux): [MIT License](https://github.com/reactjs/redux/blob/master/LICENSE.md)
* [Redux Thunk](https://github.com/reduxjs/redux-thunk): [MIT License](https://github.com/reduxjs/redux-thunk/blob/master/LICENSE.md)
* [Material UI](https://github.com/callemall/material-ui): [MIT License](https://github.com/callemall/material-ui/blob/v1-beta/LICENSE)
* [ExpressJS](https://github.com/expressjs/express): [MIT License](https://github.com/expressjs/express/blob/master/LICENSE)
* [Jest](https://github.com/facebook/jest): [BSD 3-Clause License](https://github.com/facebook/jest/blob/master/LICENSE)
* [EsLint](https://github.com/eslint/eslint): [MIT License](https://github.com/eslint/eslint/blob/master/LICENSE)
* [Enzyme](https://github.com/airbnb/enzyme): [MIT Lincense](https://github.com/airbnb/enzyme/blob/master/LICENSE.md)
* [Axios](https://github.com/axios/axios): [MIT Lincense](https://github.com/axios/axios/blob/master/LICENSE)
* [React Reactions](https://github.com/casesandberg/react-reactions/)

## How to use

Install it and run (development):

```bash
yarn install
yarn start
```

Run (production):

```bash
yarn build
yarn start:prod
```

Testing:

```bash
yarn test
```

### Configuration

Environment variables:

* `RAZZLE_CONSUMER_KEY`: News API consumer Key
* `RAZZLE_COUNTRY_KEY`: News API country key (e.g 'us')

Razzle uses _Dotenv_ configuration, the easyest way is to create a `.env.local` file on the root directory like this:

```bash
RAZZLE_CONSUMER_KEY=XXXXXXX
RAZZLE_COUNTRY_KEY=us
```

### Docker

```bash
docker build -t react-news .
docker run -ti --rm -p 3000:3000 -e RAZZLE_CONSUMER_KEY=KEY -e RAZZLE_COUNTRY_KEY=CODE react-news
```

## Deploy to `now`

1. Login: `yarn now login`
2. Add secrets:
  * `yarn now secrets add razzle-consumer-key KEY`
  * `yarn now secrets add razzle-country-key COUNTRY`
3. Deploy: `now`
