import parser from '@typescript-eslint/parser'

export default [
  {
    files: ['*.ts', '*.tsx', '*.vue'],
    languageOptions: {
      parser,
      parserOptions: {
        project: './tsconfig.json',
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
    plugins: { prettier: pluginPrettier },
    extends: ['plugin:@typescript-eslint/recommended', 'prettier'],
    rules: {
      semi: ['error', 'always'],
    },
    parserOptions: {
      'prettier/prettier': 'error',
      project: './tsconfig.eslint.json',
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
  },
]
