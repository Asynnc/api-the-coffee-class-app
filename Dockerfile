FROM node

ADD . /src

WORKDIR /usr/src/app

RUN rm -rf node_modules yarn.lock package-lock.json

COPY ./package*.json ./

RUN npm install

COPY . .

EXPOSE 3001

CMD npm run dev
