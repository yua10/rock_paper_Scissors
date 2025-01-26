FROM node:16
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
ENV PORT 3001
ENV CURRENCY_EXCHANGE_SERVICE_HOST "http://currency-exchange"
EXPOSE 3001
CMD ["node", "index.js"]
