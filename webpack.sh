# Clean up previous distributions
rm -rf aot
rm -rf dist
rm -rf build
rm -rf webpack

# Variables
WEBPACK="node node_modules/.bin/webpack"

# Run Angular Compiler
$WEBPACK --output-filename index.js -p

# Copy non-js files from build
rsync -a --exclude=*.js build/ dist

# Copy library package.json
cp src/package.json dist/package.json

# Run Angular Compiler to ES5
# $NGC -p src/tsconfig-es5.json

# Rollup simple-ui-lib.js
# $ROLLUP build/simple-ui-lib.js -o dist/simple-ui-lib.es5.js
