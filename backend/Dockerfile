FROM node:12

WORKDIR /app

COPY package.json ./

RUN yarn

COPY . ./

EXPOSE 3001

CMD ["yarn", "dev"]
