# Laravel用各種設定テンプレート説明

## 1. .vscode/settings.json

#### 概要
Laravel開発におけるVSCodeの設定が記載されています。

#### 内容
    "editor.formatOnSaveMode": "modificationsIfAvailable",
	"editor.formatOnSave": true
ファイル保存時に自動的にコード整形を行います。
1回目の保存時はコード全体を整形しますが、2回目以降は変更箇所のみを整形します。

####
    "[php]": {
            "editor.defaultFormatter": "junstyle.php-cs-fixer"
    }
PHPのソースコードにおいて、整形ツールとしてphp-cs-fixerを使用するように指定しています。

####
    "php-cs-fixer.executablePath": "${workspaceFolder}/vendor/bin/php-cs-fixer"
php-cs-fixerの設定ファイルを指定しています。

####
    "phpstan.enabled": true
静的解析ツールとして使用するPHPStanの静的解析を有効化しています。

####
    "phpstan.configFile": "phpstan.neon"
PHPStanの設定ファイルを指定しています。

####
    "phpstan.memoryLimit": "1G"
メモリ不足によるエラーを防ぐため、PHPStanが解析に使用できる最大メモリ量を1GBにしています。

## 2. .php-cs-fixer.dist.php

#### 概要
整形ツールとして使用するphp-cs-fixerの設定が記載されています。

#### 内容
    $finder = Finder::create()
        ->in([
            __DIR__.'/app',
            __DIR__.'/config',
            __DIR__.'/database',
            __DIR__.'/routes',
            __DIR__.'/tests',
        ])
        ->exclude('vendor')
        ->name('*.php')
        ->ignoreDotFiles(true)
        ->ignoreVCS(true);
整形対象のディレクトリを指定しています。

####
    return $config->setRules([
            '@PSR12' => true,
            'array_syntax' => true,
            'no_extra_blank_lines' => true,
            'no_unused_imports' => true,
            'ordered_imports' => ['sort_algorithm' => 'alpha'],
        ])
        ->setFinder($finder);
PSR-12というコーディング規約に従うようにしています。
配列の構文を短縮系に統一しています。
整形時に不要な空行を削除します。
整形時に未使用のuse文を削除します。
整形時にuse文をアルファベット順に並び替えます。

> [!NOTE]
> php-cs-fixerが実行されるとルートディレクトリにキャッシュファイルが作成されるため、.gitignoreに記載する必要があります。

## 3. phpstan.neon

#### 概要
静的解析ツールとして使用するPHPStanの設定が記載されています。

#### 内容
    includes:
        - ./vendor/larastan/larastan/extension.neon
Laravel用のPHPStan拡張機能であるLarastanの設定ファイルを指定しています。

####
    parameters:
        level: 5
        paths:
            - app
            - config
            - database
            - routes
            - tests
静的解析のレベルを5にしています。
静的解析の対象となるディレクトリを指定しています。