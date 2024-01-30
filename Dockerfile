FROM node:20-alpine as BUILDER
LABEL maintainer="Antonio Silva"

WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./
RUN npm install -g npm@latest
RUN npm install

COPY src ./src

FROM node:20-alpine

ARG NODE_ENV

WORKDIR /usr/src/app

COPY --from=BUILDER /usr/src/app/ ./

EXPOSE 3008

CMD [ "npm", "start" ]
