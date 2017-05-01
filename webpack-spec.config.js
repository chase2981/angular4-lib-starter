const ForkCheckerPlugin = require('awesome-typescript-loader').CheckerPlugin;

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
          //include: helpers.root('src', 'app'),
          loader: 'raw-loader'
        }
      ]
    },

    plugins: [
      new ForkCheckerPlugin(),
    ],

    devServer: {
      historyApiFallback: true,
      stats: 'minimal'
    }
    // plugins: [
    //   new webpack.ContextReplacementPlugin(
    //     /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
    //     __dirname
    //   ),
    // ]
  };
};
