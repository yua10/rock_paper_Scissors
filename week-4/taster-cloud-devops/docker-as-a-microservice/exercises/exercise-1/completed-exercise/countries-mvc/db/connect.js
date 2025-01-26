const { Pool } = require('pg');

const db = new Pool({
  user: process.env.DB_USER,
  // We're using the Docker Service Name as the host
  // We could use 'localhost' if not using 'docker-compose up'
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

module.exports = db;
