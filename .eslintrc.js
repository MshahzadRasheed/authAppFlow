module.exports = {
  root: true,
  extends: '@react-native-community',
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      rules: {
        '@typescript-eslint/no-shadow': ['error'],
        'no-shadow': 'off',
        'no-undef': 'off',
        'prettier/prettier': [
          'error',
          {
            usePrettierrc: true,
          },
        ],
        'react-native/no-inline-styles': ['error'],
        'react-native/no-unused-styles': ['error'],
        'react-hooks/exhaustive-deps': ['warn'],
      },
    },
  ],
};
