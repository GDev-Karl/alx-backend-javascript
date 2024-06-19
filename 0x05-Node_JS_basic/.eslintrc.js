module.exports = {
    env: {
      node: true,
      es2021: true,
    },
    extends: 'airbnb-base',
    parserOptions: {
      ecmaVersion: 12,
      sourceType: 'module', // Allows for the use of imports
    },
    rules: {
      'no-console': 'off', // Allows the use of console.log()
    },
  };
  