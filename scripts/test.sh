#!/bin/bash

my_dir="$(dirname "$0")"
source $my_dir/check-requirements.sh

working_dir=$(pwd)
prefix=""
docker_compose_file="docker-compose.test.yaml"
if [[ $working_dir =~ .\/scripts ]] 
then
    prefix="../"
fi

path_to_compose_file="$prefix$docker_compose_file"
docker-compose -f  "$prefix$docker_compose_file" up --exit-code-from back-test