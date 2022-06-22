const rollup = require("rollup");
const config = require("./rollup.config.prod");
const inputOptions = config;
const outputOptions = config.output;
async function build() {
  const bundle = await rollup.rollup(inputOptions);
  console.log(`[INFO] 开始编译 ${inputOptions.input}`);
  const { code, map } = bundle.generate(outputOptions);
  console.log(`[SUCCESS] 编译结束 ${outputOptions.file}`);
  await bundle.write(outputOptions);
}
build();
module.exports = config;
