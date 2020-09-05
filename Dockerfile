FROM node:14.8.0-stretch

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install
RUN npm install -g pm2
RUN npm install --prefix src/client

COPY . ./

EXPOSE 3000
EXPOSE 9200

CMD npm run start