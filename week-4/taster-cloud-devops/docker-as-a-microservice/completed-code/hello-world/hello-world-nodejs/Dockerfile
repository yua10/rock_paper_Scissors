FROM node:8.16.1-alpine
WORKDIR /app
COPY package.json /app
RUN npm install
ENV PORT 5000
EXPOSE 5000
COPY . /app
CMD node index.js

