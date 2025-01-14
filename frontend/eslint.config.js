import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			eslintConfigPrettier, //追加
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser,
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			//追加
			'@typescript-eslint/naming-convention': [
				'error',
				{
					selector: 'variable',
					format: ['strictCamelCase'],
				},
				{
					selector: 'variable',
					modifiers: ['const'],
					format: ['UPPER_CASE'],
				},
				{
					selector: 'function',
					format: ['strictCamelCase'],
				},
				{
					selector: 'class',
					format: ['StrictPascalCase'],
				},
				{
					selector: 'classMethod',
					format: ['strictCamelCase'],
				},
				{
					selector: 'classProperty',
					format: ['strictCamelCase'],
				},
				{
					selector: 'interface',
					format: ['StrictPascalCase'],
				},
				{
					selector: 'typeAlias',
					format: ['StrictPascalCase'],
				},
				{
					selector: 'typeMethod',
					format: ['strictCamelCase'],
				},
				{
					selector: 'typeProperty',
					format: ['strictCamelCase'],
				},
				{
					selector: 'enum',
					format: ['StrictPascalCase'],
				},
				{
					selector: 'enumMember',
					format: ['StrictPascalCase'],
				},
			],
		},
		//追加
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
);
