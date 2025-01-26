# Exercise 2

## Two microservices connected

### Duration
You have **1 hour** to complete the task defined below. 

### Team
This task is to be completed individually 

## Brief

**Create** another microservice, a database where the previous microservice will depend on. 

The microservice should be built into a docker image called **<docker-usnermae>/countries-db**

Requirements are:
- **Create** a Docker microservice built from a **Postgres** image
- **Add** the neccesary configuration to create a **country** table and the data to populate it
- The microservice should contain just two files:
    - **countries.sql**
    - **Dockerfile**
- **Push** the image to your own Docker account on DockerHub
- **Define** a **docker-compose.yml** file which creates two containers based off of the **images** you've created, building the database first. 


### Bonus

- If completed, create a short **business-value.md** file detailing why created microservices and Docker images adds value to an IT team. 

### Completed Code

If you're struggling you may look inside the **/completed-exercise** repo to see a possible solution

