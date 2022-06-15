#!/bin/bash

docker build -t pi-api .
docker run -d -p 8080:8080 pi-api:latest