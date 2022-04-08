module.exports = {
  extends: ['eslint-config-airbnb-base', './base.js', 'prettier'],
  parserOptions: {
    project: './tsconfig.json',
  },
  globals: {
    Lap: true,
    window: true,
    location: true,
    setTimeout: true,
    setInterval: true,
    clearTimeout: true,
    clearInterval: true,
    ga: true,
    module: true,
    localStorage: true,
    sessionStorage: true,
    dataLayer: true,
    XMLHttpRequest: true,
    performance: true,
  }
};
