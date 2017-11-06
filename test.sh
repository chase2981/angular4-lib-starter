# Clean up previous distributions
rm -rf build

# Variables
KARMA="node node_modules/.bin/karma"
TSC="node node_modules/.bin/tsc"

# Run Angular Compiler
$TSC -p src/tsconfig-spec.json

rsync -a --exclude=*.ts src/ build/

# Copy non-ts files from src to dist
# rsync -a --exclude=*.ts src/app dist

# start karma
$KARMA start .karma.conf.js --browsers PhantomJS --single-run
