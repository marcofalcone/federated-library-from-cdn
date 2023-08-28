const HtmlWebpackPlugin = require("html-webpack-plugin");
const {ModuleFederationPlugin} = require("webpack").container;
const webpack = require('webpack');
require('dotenv').config({ path: './.env' }); 

const remoteUrl = process.env.REMOTE_URL

module.exports = {
  entry: "./src/index",
  mode: "development",
  devServer: {
    port: 3001,
    hot: true,
    compress: true,
    watchFiles: ['src/**/*'],
  },
  target: 'web',
  resolve: {
    extensions: ['.tsx', '.ts', '.jsx', '.js', '.json'],
    alias: {
      process: 'process/browser',
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react"],
        },
      },
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "app2",
      remotes: {
        remoteLibrary: `remoteLibrary@${remoteUrl}/remoteEntry.js`,
      },
      shared: {react: {singleton: true}, "react-dom": {singleton: true}},
    }),
    new webpack.DefinePlugin({
      "process.env": JSON.stringify(process.env),
    }),
  ],
};
