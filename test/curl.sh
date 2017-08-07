#!/bin/bash

curl -d '{"username": "Tester"}' -X POST -H "Content-Type: application/json" http://localhost:3000/user
