# React + Node + MongoDB boilerplate
This is a simple boilerplate for a React frontend and Node backend project. Contains some example functionality.
 Backend with CRD, Docker-compose that supports development, working DB and fluent UI/UX.  
 If you're new to React + Nodejs, feel free to copy what I did. Can't guarantee that everything is done in the best way, but it should at least give you some image.  

## What do we have here?  
* Frontend and Backend in containers
* Docker-compose that supports development (Follows any changes done to the files and re-compiles on save)
* Backend with MongoDB
* Create, Delete and Get requests
* Css
* Simple error handling (If you're going to use this, please improve this)

## How to run  
With these simple steps you can start developing your new project:  
* Copy project with `npx degit https://github.com/uberballo/React-Node-Mongo-Boilerplate.git`
* Start with `./start.sh` do whatever the script asks you to do and if needed run `chmod +x start.sh`
* Start doing stuff  

## How to run tests  
* docker-compose -f docker-compose.test.yaml up --exit-code-from back-test  

Here we point to the `docker-compose.test.yaml` file and close all services after the `back-test` has finished.
## TODO   
If you want to use this in any production, that requires some changes.
* Add some E2E tests
* Make it easier to remove all of the example codes

