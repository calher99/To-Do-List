const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index:'./src/index.js',
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'To Do Planner',
    }),
  ],

  devtool: 'inline-source-map', //To trace errors to entry file

  
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  module: {
    rules: [
      // To add the css
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // To add images
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // To add fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
}; 