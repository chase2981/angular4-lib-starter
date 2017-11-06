# Declaration(s)
GULP="node node_modules/.bin/gulp"
KARMA="node node_modules/.bin/karma"
NGC="node node_modules/.bin/ngc"
TSC="node node_modules/.bin/tsc"

# Clean up previous distributions
rm -rf build tmp

# Run gulp inline-templates
$GULP inline-templates

# Copy over tsconfig
cp src/tsconfig-spec.json tmp/tsconfig-spec.json

# Run Angular Compiler
$TSC -p tmp/tsconfig-spec.json

# rsync -a --exclude=*.ts src/ build/

# Copy non-ts files from src to dist
# rsync -a --exclude=*.ts src/app dist

# start karma
$KARMA start .karma.conf.js --browsers PhantomJS --single-run
