FROM node:24-alpine
WORKDIR /appUI
COPY package*.json .
RUN npm i
COPY . .
EXPOSE 3000
CMD [ "npm", "start" ]
