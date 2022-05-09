// rollup-plugin-node-resolve，可以告诉 Rollup 如何查找外部模块
// rollup-plugin-commonjs，将 CommonJS 转换成 ES2015 模块的
// rollup-plugin-json，令 Rollup 从 JSON 文件中读取数据
// rollup-plugin-uglify，压缩 js 代码
// rollup-watch，监听文件变化
// rollup-plugin-serve，开启本地服务
// rollup-plugin-livereload，实时刷新页面

const path = require("path");
const { terser } = require("rollup-plugin-terser");
const config = require("./rollup.config");
const resolveFile = function (filePath) {
  return path.join(__dirname, ".", filePath);
};
config.output.sourcemap = false;
config.plugins = [...config.plugins, ...[terser()]];
module.exports = config;
