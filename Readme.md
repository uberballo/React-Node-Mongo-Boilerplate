# React + Node + TypeScript + MongoDB boilerplate

This is a simple boilerplate for a Typescript + React frontend and Node backend project. Contains some example functionality.
Backend with CRD, Docker-compose that supports development, working DB and fluent UI/UX.  
 If you're new to React + Nodejs, feel free to copy what I did.

## What do we have here?

- Frontend and Backend in containers
- Typescript
- Pre-commit hooks
- Docker-compose that supports development (Follows any changes done to the files and re-compiles on save)
- Backend with MongoDB
- Create, Delete and Get requests
- Css
- Simple error handling (If you're going to use this, please improve this)

## How to run

With these simple steps you can start developing your new project:

- Copy project with `npx degit https://github.com/uberballo/React-Node-Mongo-Boilerplate.git`
- Start with `./start.sh` do whatever the script asks you to do and if needed run `chmod +x start.sh`
- Start doing stuff

## How to run tests

Start tests with `./scripts/test.sh` or by running `./test.sh` in the `scripts` directory.  
You may need to allow executing file as program. Run `chmod +x ./scripts/<scripts name>`

The scripts first check if you have the required dependencies installed. Then it runs the tests with docker-compose. we point to the `docker-compose.test.yaml` file and close all services after the `back-test` service has finished.

## TODO

If you want to use this in any production, that requires some changes.

- Add some E2E tests
- Add TS to backend
- Make it easier to remove all of the example codes
