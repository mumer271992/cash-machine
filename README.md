# Timetracking Frontend

![Vue Badge Version 2.5.2](https://img.shields.io/badge/vue-2.5.2-green.svg)

> Timetracking Frontend Project written in Vue.js

## Build Setup

Important changes to default webpack project:
- Added Maven configuration with Maven frontend plugin to enable maven builds of the project
- Moved output directory from /dist to /target/dist to fit maven project setup
- Maven build output will be packaged in a jar file to be used in other modules
- Moved test output directories to target/reports

---


### Maven Commands
``` bash
# clear target folder
mvn clean

# Download yarn and node if not found and build the project
mvn install

# Run unit tests
mvn test
```

---

### YARN Commands
``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build

# build for production and view the bundle analyzer report
yarn run build --report

# run unit tests
yarn run unit

# run e2e tests
yarn run e2e

# run all tests
yarn test
```