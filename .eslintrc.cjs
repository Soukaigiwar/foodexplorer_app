module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '**/*.svg', '**/*.png'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    "react-hooks/exhaustive-deps": "off",
    "indent": ["error", 4],
    "quotes": ["error", "double"],
    "semi": ["error", "always"],
    "no-cond-assign": ["error", "always"],
    "no-console": "off",
    'react/prop-types': 'off'
  },
}
