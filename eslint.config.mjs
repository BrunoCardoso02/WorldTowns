import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ['**/*.{js,mjs,cjs,ts}'] },
  {
    languageOptions: { globals: globals.browser },
    rules: {
      'indent': ['error', 2],
      'semi': ['error', 'always'], // Exige ponto e vírgula no final das instruções
      'quotes': ['error', 'single'], // Usa aspas simples para strings
      'space-before-function-paren': ['error', 'always'], // Espaço antes dos parênteses nas funções
      'object-curly-spacing': ['error', 'always'] // Espaço dentro das chaves de objetos
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
];