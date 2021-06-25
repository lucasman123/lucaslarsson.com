#!/bin/sh
npm run build
scp -r ./build/* lucas@webster:/var/www/html
