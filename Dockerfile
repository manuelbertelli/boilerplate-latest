FROM node:6.5

WORKDIR /app
VOLUME /app
EXPOSE 8080
RUN npm i

CMD npm start
