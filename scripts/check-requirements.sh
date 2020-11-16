#!/bin/bash

check_command () {
    if ! command -v $1 &> /dev/null
    then
        echo "$1 not found"
        exit
    fi
}


check_command "docker"
check_command "docker-compose"