const join = require('path').join;

module.exports = () => {
  return {
      devtool: 'inline-source-map',
      entry: {
        main: './src/main.ts'
      },
      output: {
        path: join(__dirname, 'spec'),
        filename: '[name].bundle.js'
      },
      resolve: {
        extensions: ['.js', '.ts', '.html']
      },

      module: {
        exprContextCritical: false,

        rules: [{
            test: /\.ts$/,
            loaders: [
              'awesome-typescript-loader?configFileName=tsconfig-spec.json',
              'angular2-template-loader'
            ]
          },
          {
            test: /\.html$/,
            loader: 'raw-loader'
          },
          {
            test: /\.css$/,
            loader: 'raw-loader'
          }
        ]
      }
    }
};
