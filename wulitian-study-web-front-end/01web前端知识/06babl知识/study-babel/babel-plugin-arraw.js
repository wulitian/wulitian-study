const template = require("@babel/template");
const generate = require("@babel/generator");
const types = require("@babel/types");

console.log(
    template
)
const buildRequire = template.statement(`
  var %%importName%% = require(%%source%%);
`);
console.log(buildRequire)
const ast = buildRequire({
    importName: types.identifier("myModule"),
    source: types.stringLiteral("my-module"),
});


console.log(generate.default(ast).code);