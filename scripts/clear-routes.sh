#!/bin/bash

cd "$(dirname "$0")"/../api/routes

shopt -s extglob
rm -rf !(index.js)
