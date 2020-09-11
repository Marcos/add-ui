# Stage 0, based on Node.js, to build and compile Angular
FROM node:12.7-alpine as node
RUN mkdir /app

WORKDIR /app
RUN npm install -g @angular/cli
COPY . .
RUN npm install

EXPOSE 4200
