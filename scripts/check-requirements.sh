#!/bin/bash

check_command () {
    if ! command -v $1 &> /dev/null
    then
        echo "$1 not found"
        exit
    fi
}

check_all_commands () {
    check_command "docker"
    check_command "docker-compose"
}

check_command "docker"
check_command "docker-compose"
echo "hello from check"