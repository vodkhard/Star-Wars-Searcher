FROM node:12

WORKDIR /usr/src/app

COPY package.json ./
COPY yarn.lock ./
RUN yarn install
COPY . .
RUN yarn build
RUN yarn global add serve

CMD ["serve", "-s", "build"]
EXPOSE 5000