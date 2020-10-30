#!/bin/bash

if [ ! -f ./backend/.env ]; then
    echo "env file missing. Please run 'cp backend/.env.example backend/.env'"
    exit 1
fi

#docker-compose up