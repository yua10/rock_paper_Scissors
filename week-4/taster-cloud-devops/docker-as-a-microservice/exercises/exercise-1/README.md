# Exercise 1

## First Docker microservice

### Duration
You have **2 hours** to complete the task defined below. 

### Team
This task is to be completed individually 

## Brief

**Create** a microservice, an MVC for an API relating to countries and their information. 

The microservice should be built into a docker image called **<docker-username>/countries-mvc**

This afternoon we'll build a second microservice for the database and connect it. Because of this we won't have actual data at this point in time to manually test the code.

However the database should have rows relating to the countries:
- name
- continent
- population
- capital

You'll still need a **db** folder in your **MVC** to connect into the yet to be built database microservice. In your **db** folder, you'll need one file: **connect.js** which will contain code similar to:

**connect.js**
```js
const { Pool } = require('pg');

const db = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});

module.exports = db;
```

We'll also need a **.env** file which will contain code similar to:
```.env
PORT = 3000
DB_USER=postgres
DB_HOST=countries-db
DB_NAME=countries
DB_PASSWORD=docker
DB_PORT=5432
```

Requirements are:
- **Create** a Docker microservice built from a **Node** image
- **Add** the **routing**, **controllers** and **models** to define routes for:
    - **index**
    - **show**
- **Define** a **Dockerfile** containing the layers/instructions to build the image
- **Push** the image to your own Docker account on DockerHub

### Bonus

- If completed, expand the MVC to include full CRUD functionality.

### Completed Code

If you're struggling you may look inside the **/completed-exercise** repo to see a possible solution

