const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    lap: './src/app.ts',
    config: './assets/config.js',
  },
  devtool: 'inline-source-map',
  mode: 'production',
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        include: [path.resolve(__dirname, 'src')],
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    chunkFormat: 'commonjs',
    filename: '[name].js',
    path: path.resolve(__dirname, 'static'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './assets/index.html',
    }),
  ],
};
