FROM node:8.14

WORKDIR /usr/src/react-news-challenge

COPY . .

RUN yarn install && yarn build

EXPOSE 3000

CMD [ "yarn", "start:prod" ]