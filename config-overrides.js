const path = require('path');

module.exports = function override(config) {
  // Adicione alias
  config.resolve.alias = {
    ...config.resolve.alias,
    '~components': path.resolve(__dirname, 'src/components/'),
  };

  return config;
};
