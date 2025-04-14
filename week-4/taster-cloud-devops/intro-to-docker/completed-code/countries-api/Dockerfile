FROM node:16
WORKDIR /app
COPY package*.json /app
RUN npm install
COPY . /app
ENV PORT=3000
ENV DB_URL=
RUN npm run setup-db
CMD ["node", "server/index.js"]
