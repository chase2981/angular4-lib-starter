#!/bin/bash

# Declaration(s)
GULP="node node_modules/.bin/gulp"
KARMA="node node_modules/.bin/karma"
NGC="node node_modules/.bin/ngc"
ROLLUP="node node_modules/.bin/rollup"
TSC="node node_modules/.bin/tsc"

# Clean up previous distributions
rm -rf aot dist build tmp

# Run gulp inline-templates
$GULP inline-templates

# Run Typescript Compiler
$NGC -p tsconfig.json

# Copy html files from src to dist
# rsync -a --exclude=*.ts src/ dist/
let prev_process_code=$?

# Basic if statement
if [ $(( $prev_process_code == 0 )) ]
then
echo typescript success!!.
# Copy non-js files from build to dist
rsync -a build/ dist/
rsync -a tmp/ dist/tmp/

# Rollup simple-ui-lib.js
$ROLLUP -c .rollup-config.js
echo rollup success!!.
pwd
else
echo compilation failed!!
fi
date



# Copy library package.json
# cp src/package.json dist/package.json

# Run Angular Compiler to ES5
# $NGC -p src/tsconfig-es5.json

# Rollup simple-ui-lib.js
# $ROLLUP build/simple-ui-lib.js -o dist/simple-ui-lib.es5.js
