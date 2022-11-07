const baseConfig = {
  src: [
    "./src/fixtures/test.js"
  ],
  screenshots: {
    takeOnFails: true,
    path: './screenshots'
  },
  pageLoadTimeout: 20000,
  selectorTimeout: 5000,
  disableMultipleWindows: true,
  skipJsErrors: true
}

module.exports = {
  baseConfig
};
