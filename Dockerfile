FROM node:slim
WORKDIR /app
ADD ./app /app
RUN npm install
EXPOSE 3000
CMD npm start
