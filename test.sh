# Clean up previous distributions
rm -rf aot
rm -rf dist
rm -rf build

# Variables
BABEL="node node_modules/.bin/babel"
NGC="node node_modules/.bin/ngc"
KARMA="node node_modules/.bin/karma"
TSC="node node_modules/.bin/tsc"
ROLLUP="node node_modules/.bin/rollup"

# Run Angular Compiler
$TSC -p src/

# Copy non-ts files from src
rsync -a --exclude=*.ts src/app dist

# $BABEL --copy-files --out-dir build dist

# start karma
$KARMA start