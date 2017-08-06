#!/bin/bash

# Declaration(s)
NGC="node node_modules/.bin/ngc"
TSC="node node_modules/.bin/tsc"
ROLLUP="node node_modules/.bin/rollup"

# Clean up previous distributions
rm -rf aot
rm -rf dist
rm -rf build

# Run Typescript Compiler
# $NGC -p src/tsconfig.json
$TSC -p src/tsconfig.json

# Copy html files from src to dist
# rsync -a --exclude=*.ts src/ dist/
let prev_process_code=$?

# Basic if statement
if [ $(( $prev_process_code == 0 )) ]
then
echo success!!.
pwd
else
echo compilation failed!!
fi
date

# Copy non-js files from build to dist
rsync -a build/ dist/

# Rollup simple-ui-lib.js
$ROLLUP -c .rollup-config.js

# Copy library package.json
# cp src/package.json dist/package.json

# Run Angular Compiler to ES5
# $NGC -p src/tsconfig-es5.json

# Rollup simple-ui-lib.js
# $ROLLUP build/simple-ui-lib.js -o dist/simple-ui-lib.es5.js
