module.exports = async function (env, argv) {
  const loadDefaultConfigAsync = require("@expo/webpack-config");
  return await loadDefaultConfigAsync(env, argv);
};
