module.exports = {
  env: {
    node: true, // This indicates a Node.js environment supporting CJS
  },
  parserOptions: {
    requireConfigFile: false,
    parser: "@babel/eslint-parser",
  },
  extends: ["plugin:vue/vue3-essential", "eslint:recommended"],
};
