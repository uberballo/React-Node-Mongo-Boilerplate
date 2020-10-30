#!/bin/bash

if [ ! -f ./backend/.env ]; then
    echo "env file missing"
    exit 1
fi

docker-compose up