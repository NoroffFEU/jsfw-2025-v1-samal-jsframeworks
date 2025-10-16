import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactX from 'eslint-plugin-react-x'
import reactDOM from 'eslint-plugin-react-dom'
import hooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import { defineConfig } from 'eslint/config'

export default defineConfig([
  { ignores: ['dist', 'coverage', '.vite'] },

  js.configs.recommended,

  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      reactX.configs.recommended,      
      reactDOM.configs.recommended,   
    ],
    plugins: {
      'react-x': reactX,
      'react-dom': reactDOM,
      'react-hooks': hooks,
      'react-refresh': reactRefresh,
    },
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      'react-refresh/only-export-components': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'react-x/no-class-component': 'warn',
    },
  },
])
