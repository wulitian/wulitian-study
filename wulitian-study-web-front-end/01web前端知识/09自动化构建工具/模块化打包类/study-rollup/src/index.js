var _ = require("lodash");
function fn() {
  const a = [1, 2, 3];
  const b = [4, 5, 6];
  return [...a, ...b];
}
console.log(_.VERSION);
console.log(fn);
