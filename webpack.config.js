const path = require("path");

module.exports = {
  entry: {
    client: ["./src/index.js"]
  },
  mode: "development",
  module: {
    rules: [
      // Transform ES6 and React with Babel
      {
        test: /\.js$/,
        include: [path.resolve(__dirname, "src")],
        loader: require.resolve("babel-loader")
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      },
      {
        test: /\.(png|jpe?g|gif|eot|svg|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      }
    ]
  },
  output: {
    filename: "[name].js",
    chunkFilename: "[name].js",
    path: path.resolve(__dirname, "public"),
    publicPath: "/"
  },
  resolve: {
    aliasFields: ["browser"]
  },
  devtool: "cheap-module-source-map",
  stats: "errors-warnings",
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  }
};
