# Clean up previous distributions
rm -rf build
rm -rf dist

# Variables
KARMA="node node_modules/.bin/karma"
TSC="node node_modules/.bin/tsc"

# Run Angular Compiler
$TSC -p src/tsconfig-spec.json

# Copy non-ts files from src to dist
# rsync -a --exclude=*.ts src/app dist

# start karma
$KARMA start .karma.conf.js --browsers PhantomJS --single-run
