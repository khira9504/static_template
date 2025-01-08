const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = function() {
  return {
    mode: "development",
    entry: {},
    output: {
      path: path.resolve(__dirname, "dist"),
    },
    devServer: {
      historyApiFallback: true,
      compress: true,
      hot: true,
      open: true,
      port: 8080,
    },
    module: {
      rules: [
        {
          test: /\.ejs$/,
          use: [
            "html-loader",
            "template-ejs-loader",
          ],
        },
        {
          test: /\.css$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            'postcss-loader'
          ]
        },
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: "src/index.ejs",
        filename: "index.html",
        minify: {
          collapseWhitespace: false,
          preserveLineBreaks: true,
        },
      }),
      new MiniCssExtractPlugin({
        filename: './src/base/style/tailwind.css',
      }),
    ],
    optimization: {
      minimizer: [
        new CssMinimizerPlugin()
      ],
    },
  }
}
