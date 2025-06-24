module.exports = {
  '*.{ts,js,css,html,json,md}': [
    'prettier --write',
    'eslint --fix'
  ]
};
