module.exports = {
  env: {
    jest: true,
  },
  extends: 'airbnb-base',
  rules: {
    'comma-dangle': 0,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'no-return-assign': 0,
    camelcase: 0,
    'linebreak-style': ['error', process.platform === 'win32' ? 'windows' : 'unix'],
    'max-len': 0,
    'no-restricted-syntax': 0,
    'no-unused-expressions': 0,
    yoda: 0,
    'no-console': 0
  }
};
