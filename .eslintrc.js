module.exports = {
    extends: [
      'plugin:vue/recommended',
    ],
    env: {
        es6: true,
        browser: true,
        node: true,
        jquery: true,
    },
  rules: {
    "vue/component-name-in-template-casing": ["error", "kebab-case", {}]
  }
};
