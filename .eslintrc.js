module.exports = {
  extends: ['react-app', 'plugin:prettier/recommended'],
  rules: {
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'function-declaration',
      },
    ],
  },
};
