FROM node:8.14

WORKDIR /usr/src/react-news-challenge

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 3000

CMD [ "yarn", "start:prod" ]