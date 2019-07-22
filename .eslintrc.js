module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
    'plugin:react/recommended',
  ],
  plugins: [
    'react',
  ],
  parser: 'babel-eslint',
  rules: {
    "import/no-extraneous-dependencies": false,
  },
  env: {
    jest: true
  }
};