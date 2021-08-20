#!/bin/bash

cd "$(dirname "$0")"/..

sed -i /COOKIE_SECRET=*/d .env

echo "COOKIE_SECRET=$(xxd -p -l 8 -c 8 /dev/urandom)" >> .env
