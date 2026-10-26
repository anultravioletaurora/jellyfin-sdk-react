import reactNative from '@react-native/eslint-config/flat';
import prettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...reactNative,
  prettierRecommended,
  {
    rules: {
      'react/react-in-jsx-scope': 'off',
    },
  },
  {
    ignores: ['node_modules/', 'lib/', 'example/dist/'],
  },
]);
