module.exports = function ({types: babelTypes}) {
    return {
        name: "babel-plugin-example",
        visitor: {
            Identifier(path, state) {
            }
        }
    };
};