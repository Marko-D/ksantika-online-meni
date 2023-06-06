// module.exports = function override(config, env) {
//   config.output = {
//       ...config.output, // copy all settings
//       filename: "static/js/[name].js",
//       chunkFilename: "static/js/[name]2.chunk.js",
//   };
//   return config;
// };


// This file is used to add webpack custom configuration without having to EJECT
module.exports = function override(config, env) {
  // Update the chunk filename pattern
  config.output.chunkFilename = 'static/js/[name].[contenthash:8].chunk.js';

  // Return the updated config
  return config;
};