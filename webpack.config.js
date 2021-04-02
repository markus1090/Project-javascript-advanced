const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const DotenvWebpackPlugin = require('dotenv-webpack');

module.exports = {
mode: 'production',
entry: {
  index: './src/index.js',
  geo: './src/geo.js',
  byName: './src/byName.js',
},
resolve: {
extensions: ['.webpack.js', '.web.js', '.ts', '.js']
},
devtool: 'inline-source-map',
devServer: {
  contentBase: './dist',
},
plugins: [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
  }),
  new DotenvWebpackPlugin()
], 
module: {
rules: [
    { 
      test: /.ts$/, loader: 'ts-loader' 
    },
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      loader: 'file-loader',
      options: {
        name: '[name].[hash:6].[ext]',
        outputPath: 'images',
        publicPath: 'images',
        emitFile: true,
        esModule: false
      },
    }, 
  ]
},
output: {
  filename: '[name].bundle.js',
  path: path.resolve(__dirname, 'dist'),
  clean: true,
},
};