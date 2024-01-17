module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-empty': [2, 'always'],
    'body-empty': [2, 'always'],
    'footer-empty': [2, 'always'],
  },
};
