const { baseConfig } = require('./base.config');

module.exports = {
  ...baseConfig,
  browsers: "browserstack:safari@15.6:OS X Monterey",
  ports: "9000,9100"
}
