# Welcome !

Thanks for using the project. Below are the most common bash commands to run the server, but to start you can simply `npm install` then `npm run start` and finally head to http://localhost:3000 for the greeting message.

The project is subdivized in three main components :

* controllers : they are handling the HTTP requests
* services : they handle the main app logic and can be injected inside controllers
* bootstrap code (main.ts and app.module.ts) : they are responsible to setup and start the server

Each controllers and services are fully tested (`npm run test`) and End to End testing is also available (`npm run test:e2e`).

I made available a StackBlitz environment if you want to play with the code. Be aware though, testing is failing in the WebContainer!

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
