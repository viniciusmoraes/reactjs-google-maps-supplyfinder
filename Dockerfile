
# DOCKER INSTALL AND RUN
# Install: https://www.docker.com/products/docker-desktop
# RUN: docker build --tag react-supply-finder:latest .
# RUN: docker run -v /Users/viniciusmoraes/Desktop/codux/react-supplyfinder/logs:/home/node/.npm/_logs/ -v /Users/viniciusmoraes/Desktop/codux/react-supplyfinder:/home/node/app -v /home/node/app/node_modules --name react-supply-finder -d -it -p 3000:3000 -p 3001:3001 react-supply-finder:latest
# docker exec -it [CODE_CONTAINER] /bin/sh
# web url http://react-supplyfinder.herokuapp.com/

FROM node:14-alpine as builder
USER root
RUN apk upgrade && apk update
RUN apk add git curl
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app

COPY ./package*.json ./
COPY ./server-app.sh ./
COPY ./server-middleware.js ./
# COPY ./app .

RUN npm -g config set user root && npm config set unsafe-perm true && npm install -g npm-reinstall && npm install -g npm@latest && npm install -g typescript && npm install -g ts-node && npm install -g create-react-app

RUN npm install

VOLUME /Users/viniciusmoraes/Desktop/codux/react-supplyfinder /home/node/app
VOLUME /Users/viniciusmoraes/Desktop/codux/react-supplyfinder/logs /home/node/.npm/_logs/

EXPOSE 3000 3001

CMD sh server-app.sh