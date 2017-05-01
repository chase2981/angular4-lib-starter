module.exports = () => {
  return {
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
          //include: helpers.root('src', 'app'),
          loader: 'raw-loader'
        }
      ]
    },
    devtool: 'inline-source-map'
  };
};
