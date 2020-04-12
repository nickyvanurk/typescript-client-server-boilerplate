const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist/client/js'),
    publicPath: '/js/'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist/client'
  }
};
