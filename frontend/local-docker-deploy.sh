#!/bin/bash

docker build -t pi-frontend .
docker run -d -p 80:80 pi-frontend:latest