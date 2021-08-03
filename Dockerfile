FROM node:12

WORKDIR usr/src/app

COPY package*.json ./

COPY . .

RUN npm i

EXPOSE 8000

CMD npm run dev

