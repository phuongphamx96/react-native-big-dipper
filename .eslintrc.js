module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'eslint-config-prettier',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended', // Make sure this is always the last element in the array.
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-native', 'simple-import-sort'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        'prettier/prettier': ['error', {}, { usePrettierrc: true }],
        'react-native/no-unused-styles': 2,
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/ban-ts-comment': 'off',
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-var-requires': 'off',
        'simple-import-sort/imports': 'error',
        'simple-import-sort/exports': 'error',
        'no-shadow': 'off',
        'no-undef': 'off',
        'arrow-body-style': ['error', 'always'],
      },
    },
  ],
};
