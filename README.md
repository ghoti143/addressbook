# Boilerplace React + ExpressJS + Postgres

* React
* Recoil
* ExpressJS
* Sequelize
* Postgres Docker container
* Yarn workspaces monorepo

## Clone repo

`git clone https://github.com/ghoti143/boilerplate-react-express-pg.git`

## Install dependencies

`cd boilerplate-react-express-pg && yarn install`

## Bring up database

`docker-compose up -d`

## Migrate tables

`yarn run migrate`

## Start dev

`yarn start:dev`

## Insert data

```
curl -w "\n" \
       -X PUT \
       -d "firstName=Bobbie&lastName=Draper" \
       localhost:3000/people
```

credits:
https://semaphoreci.com/community/tutorials/dockerizing-a-node-js-web-application
https://benjamin-chavez.com/blog/creating-a-typescript-express.js-web-application-with-es6-step-by-step-guide
