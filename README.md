# API REST para ejemplo uso de git

> API REST para ejemplo de uso de git

## Getting started

### Prerequisites

**Node.js** is required to run the application.

Visit [this page](https://nodejs.org/en/download/) for download instructions.

### Installation

Install the required dependencies:

`$ npm install`

### Main commands

#### Run

Start a local development server with the following command:

`$ npm run dev`

This will:

- Fire up the server at [localhost:8080](http://localhost:8080)
- Set the `NODE_ENV` variable to `development`
- Watch for changes in the source files allowing the server to reload automatically

#### Deploy

For deployment use, start the server with:

`$ npm run start`

**NOTE:** the application makes use of the `NODE_ENV` environment variable do determine its running environment.

#### Test

Run tests with [Mocha](https://mochajs.org/) and [Chai](https://www.chaijs.com/) with the following command:

`$ npm run test`

#### Lint

Check for linting errors with:

`$ npm run lint`

Automatically fix linting errors with:

`$ npm run lint:fix`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md).
