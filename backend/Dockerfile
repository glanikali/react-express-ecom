FROM node:18-alpine3.15
WORKDIR /app

COPY ./package.json /package.json
COPY ./yarn.lock /yarn.lock
COPY ./prisma ./prisma
COPY ./src ./src

RUN rm -rf node_modules 
RUN yarn install

EXPOSE 3001




