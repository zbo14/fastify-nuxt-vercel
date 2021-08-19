#!/bin/bash

cd "$(dirname "$0")"/../api/routes

rm -rf !(index.js)
