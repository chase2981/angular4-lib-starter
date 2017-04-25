const join = require('path').join;

const include = join(__dirname, 'src')

module.exports = {
    entry: './src/index',
    output: {
        path: join(__dirname, 'dist'),
        libraryTarget: 'umd',
        library: 'angular4LibStarter'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', include },
            { test: /\.json$/, loader: 'json-loader', include }
        ]
    }
}