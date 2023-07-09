let MiniCssExtractPlugin = require('./node_modules/mini-css-extract-plugin');

module.exports = {
  plugin: [
    new MiniCssExtractPlugin({
      ignoreOrder: true,
    }),
  ],
 __esModule: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader],
      },
    ],
  },
};