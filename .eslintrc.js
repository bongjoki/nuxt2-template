module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  extends: ['plugin:vue/recommended', 'airbnb-base'],
  // required to lint *.vue files
  plugins: ['vue'],
  settings: {
    'import/resolver': {
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
  // add your custom rules here
  rules: {
    'no-shadow': 0,
    'func-names': 0,
    'import/extensions': 0,
    'max-len': 0,
    'no-confusing-arrow': 0,
    'implicit-arrow-linebreak': 0,
    'function-paren-newline': 0,
    'operator-linebreak': 0,
    'no-underscore-dangle': 0,
    'no-unused-vars': 0,
    'vue/multi-word-component-names': 0,
    'vue/order-in-components': 0,
    'no-param-reassign': 0,
    'object-curly-newline': 0,
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-restricted-syntax': [0, 'ForOfStatement'],
    'vue/component-tags-order': [
      'warn',
      {
        order: ['style', 'template', 'script'],
      },
    ],
  },
};
