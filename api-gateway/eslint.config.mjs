module.exports = {
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint/eslint-plugin', 'unused-imports', 'prettier'],
   extends: [
      'plugin:@typescript-eslint/recommended',
      //  'plugin:prettier/recommended'
   ],
   root: true,
   env: {
      node: true,
      jest: true,
   },
   ignorePatterns: ['.eslintrc.js'],
   rules: {
      'no-unused-vars': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'prettier/prettier': [
         'error',
         {
            endOfLine: 'auto',
         },
      ],
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
         'warn',
         {
            vars: 'all',
            varsIgnorePattern: '^_',
            args: 'after-used',
            argsIgnorePattern: '^_',
         },
      ],
   },
};
