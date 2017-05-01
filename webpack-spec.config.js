module.exports = () => {
  return {
      devtool: 'inline-source-map',
      entry: {
        main: './src/main.ts'
      },
      output: {
        path: './dist',
        filename: '[name].bundle.js'
      },
      resolve: {
        extensions: ['.js', '.ts', '.html']
      },

      module: {
        exprContextCritical: true,

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
