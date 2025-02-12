# Next.js用各種設定テンプレート説明

## 1. .vscode/settings.json

#### 概要

Next.js開発におけるVSCodeの設定が記載されています。

#### 内容

    "editor.formatOnSaveMode": "modificationsIfAvailable",
    "editor.formatOnSave": true

ファイル保存時に自動的にコード整形を行います。
1回目の保存時はコード全体を整形しますが、2回目以降は変更箇所のみを整形します。

####

    "[言語名]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }

各言語のソースコードにおいて、整形ツールとしてPrettierを使用するように指定しています。

## 2. .prettierrc

#### 概要

整形ツールとして使用するPrettierの設定が記載されています。

#### 内容

    "tabWidth": 4

インデントのスペースの数を4にしています。

####

    "useTabs": false

インデントにtabではなく、スペースを使用するようにしています。

####

    "semi": true

整形時に全ての文の最後に`;`を追加するようにしています。

####

    "singleQuote": true

整形時に`"`を`'`に変更するようにしています。

## 3. eslint.config.mjs

#### 概要

静的解析ツールとして使用するESLintの設定が記載されています。

#### 内容

    files: ['**/*.{ts,tsx}']

静的解析の対象となるファイルの拡張子を指定しています。

####

    ignores: ['**/.next/**/*', '*.config.mjs']

静的解析の対象外となるファイルの拡張子を指定しています。

####

    eslint.configs.recommended,
    ...compat.extends('next/core-web-vitals')

Next.js公式が推奨しているパフォーマンス最適化のためのルールを適用しています。

####

    languageOptions: {
        parser: tseslint.parser,
        parserOptions: {
            project: true,
            tsconfigRootDir: __dirname,
        },
    }

TypeScriptの型チェックを有効にし、ESLintで解析できるようにしています。

####

    '@typescript-eslint/naming-convention': [
          'error',
          {
                  selector: 'ターゲットとする識別子',
                  format: ['一致させる型'],
          },
          ...
    ],

命名規則として指定されている型で記載されていない場合、コード上に赤波線が引かれるようにしています。

####

    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
        globals: {
            React: 'readonly',
        },
    }

指定されたファイルに対して、`React`を読み取り専用のグローバル変数として設定しています。

####

    eslintConfigPrettier

整形ツールのPrettierと競合するESLintのルールを無効化しています。
