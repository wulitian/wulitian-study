const path = require("path");
const serve = require("rollup-plugin-serve");
const livereload = require("rollup-plugin-livereload");
const config = require("./rollup.config");
const resolveFile = function (filePath) {
  return path.join(__dirname, "..", filePath);
};
config.output.sourcemap = true;
config.plugins = [
  ...config.plugins,
  ...[
    livereload(),
    serve({
      host: "localhost",
      port: 3000,
      historyApiFallback: true,
      contentBase: ".",
      open: true,
      openPage: "/index",
      verbose: true,
    }),
  ],
];
module.exports = config;
