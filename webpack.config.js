const path = require("path");

module.exports = {
  mode: "development",
  entry: "./app/index.js",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "public")
  },
  module: {
    rules: [
      {
        test: /\.bpmnlintrc$/,
        use: [
          {
            loader: "bpmnlint-loader"
          }
        ]
      }
    ]
  },
  devtool: "eval",
  devServer: {
    port: parseInt(process.env.PORT || "8080", 10),
    host: process.env.HOST || "127.0.0.1"
  }
};
