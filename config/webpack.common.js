const HtmlWebpackPlugin = require('html-webpack-plugin')

const paths = require('./paths')

module.exports = {
  entry: [paths.src + '/index.js'],

  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },

plugins: [
   new HtmlWebpackPlugin({
    template: "./src/template.html",
    inject: "body",
    title: 'A regular app'
   })
  ],

  module: {
    rules: [
      { 
        test: /\.(js|jsx)$/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', "@babel/preset-react"]
          }
        }
      },

      { 
        test:/\.(png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },

      { 
        test: /\.(woff(2)?|eot|ttf|otf|svg|)$/, 
        type: 'asset/inline'
      },
    ],
  },

  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      '@': paths.src,
      assets: paths.public,
    },
  },
}