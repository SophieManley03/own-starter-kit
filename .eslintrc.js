module.exports = {
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  rules: {
    indent: "off",
    "@typescript-eslint/indent": ["error", 2],
  },
  extends: ['plugin:@typescript-eslint/recommended', "plugin:react/recommended"],
}