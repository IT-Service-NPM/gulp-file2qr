# gulp-file2qr

[![GitHub release][github-release]][github-release-url]
[![NPM release][npm]][npm-url]
[![Node version][node]][node-url]
[![Dependencies status][deps]][deps-url]
[![Install size][size]][size-url]

[![CI Status][build]][build-url]
[![Tests Results][tests]][tests-url]
[![Coverage status][coverage]][coverage-url]

[![Semantic Versioning](https://img.shields.io/badge/Semantic%20Versioning-v2.0.0-green.svg?logo=semver)](https://semver.org/lang/ru/spec/v2.0.0.html)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-v1.0.0-yellow.svg?logo=git)](https://conventionalcommits.org)
[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://makeapullrequest.com)

[![VS Code](https://img.shields.io/badge/Visual_Studio_Code-0078D4?logo=visual%20studio%20code)](https://code.visualstudio.com)
[![TypeScript](https://img.shields.io/badge/TypeScript-333333.svg?logo=typescript)](http://www.typescriptlang.org/)
[![EditorConfig](https://img.shields.io/badge/EditorConfig-333333.svg?logo=editorconfig)](https://editorconfig.org)
[![ESLint](https://img.shields.io/badge/ESLint-3A33D1?logo=eslint)](https://eslint.org)

[github-release]: https://img.shields.io/github/v/release/IT-Service-NPM/gulp-file2qr.svg?sort=semver&logo=github

[github-release-url]: https://github.com/IT-Service-NPM/gulp-file2qr/releases

[npm]: https://img.shields.io/npm/v/gulp-file2qr.svg?logo=npm

[npm-url]: https://www.npmjs.com/package/gulp-file2qr

[node]: https://img.shields.io/node/v/gulp-file2qr.svg

[node-url]: https://nodejs.org

[deps]: https://img.shields.io/librariesio/release/npm/gulp-file2qr

[deps-url]: https://libraries.io/npm/gulp-file2qr/tree

[size]: https://packagephobia.com/badge?p=gulp-file2qr

[size-url]: https://packagephobia.com/result?p=gulp-file2qr

[build]: https://github.com/IT-Service-NPM/gulp-file2qr/actions/workflows/ci.yml/badge.svg?branch=main

[build-url]: https://github.com/IT-Service-NPM/gulp-file2qr/actions/workflows/ci.yml

[tests]: https://gist.githubusercontent.com/sergey-s-betke/d70e4de09a490afc9fb7a737363b231a/raw/gulp-file2qr-tests.svg

[tests-url]: https://github.com/IT-Service-NPM/gulp-file2qr/actions/workflows/ci.yml

[coverage]: https://gist.githubusercontent.com/sergey-s-betke/d70e4de09a490afc9fb7a737363b231a/raw/gulp-file2qr-coverage.svg

[coverage-url]: https://github.com/IT-Service-NPM/gulp-file2qr/actions/workflows/ci.yml

This Gulp plugin build QRCode from data in source files
(now from .url files,
and from other file types in the future).

## Contents

* [Install](#install)
* [Examples](#examples)
  * [Create PNG QRCode from string, contains URL](#create-png-qrcode-from-string-containsurl)
  * [Create PNG QRCode from text files, contains URL](#create-png-qrcode-from-text-files-containsurl)
  * [Create PNG QRCode from .url files with default settings](#create-png-qrcode-from-url-files-with-defaultsettings)
  * [Create QRCode in streaming mode with scale](#create-qrcode-in-streaming-mode-withscale)
* [API](#api)
* [License](#license)

## Install

```sh
npm install --save-dev gulp-file2qr
```

## Examples

### Create PNG QRCode from string, contains URL

`file2qr` can create PNG QRCodes from string, contains URL.

```javascript file=test/examples/01/gulpfile.mjs
import { file2qr } from '#gulp-file2qr';
import GulpClient from 'gulp';
import file from 'gulp-file';

function task1() {
  return file('test-file', 'https://github.com/IT-Service-NPM/gulp-file2qr', { src: true })
    .pipe(file2qr())
    .pipe(GulpClient.dest('output'));
};
task1.description = 'Test gulp task for creating PNG QR codes';
GulpClient.task(task1);

```

QRCode:

[![QRCode](./test/examples/01/output/test-file.png)](./test/examples/01/output/test-file.png)

### Create PNG QRCode from text files, contains URL

`file2qr` can create PNG QRCodes from text files, contains URL.

```typescript file=test/examples/02/gulpfile.ts
import { file2qr } from '#gulp-file2qr';
import GulpClient from 'gulp';

function task1() {
  return GulpClient.src('fixtures/*.txt')
    .pipe(file2qr())
    .pipe(GulpClient.dest('output'));
};
task1.description = 'Test gulp task for creating PNG QR codes';
GulpClient.task(task1);

```

.txt files, for this example:

```text file=test/examples/02/fixtures/test-file.txt
https://github.com/IT-Service-NPM/gulp-file2qr
```

QRCode:

[![QRCode](./test/examples/02/output/test-file.png)](./test/examples/02/output/test-file.png)

### Create PNG QRCode from .url files with default settings

`url2qr` can create PNG QRCodes from .url files.

```typescript file=test/examples/03/gulpfile.ts
import { url2qr } from '#gulp-file2qr';
import GulpClient from 'gulp';

function task1() {
  return GulpClient.src('fixtures/*.url')
    .pipe(url2qr())
    .pipe(GulpClient.dest('output'));
};
task1.description = 'Test gulp task for creating PNG QR codes';
GulpClient.task(task1);

```

.url files — INI files. For example:

```ini file=test/examples/03/fixtures/test-file.url
[{000214A0-0000-0000-C000-000000000046}]
Prop3=19,2
[InternetShortcut]
URL=https://github.com/IT-Service-NPM/gulp-file2qr
```

QRCode:

[![QRCode](./test/examples/03/output/test-file.png)](./test/examples/03/output/test-file.png)

### Create QRCode in streaming mode with scale

Read .url files in streaming mode
and create PNG QRCodes with `scale = 10`:

```typescript file=test/examples/04/gulpfile.ts
import { url2qr } from '#gulp-file2qr';
import GulpClient from 'gulp';

function task1() {
  return GulpClient.src('fixtures/*.url', { buffer: false })
    .pipe(url2qr({ qrOptions: { scale: 10 }, buffer: false }))
    .pipe(GulpClient.dest('output', { encoding: false }));
};
task1.description = 'Test gulp task for creating PNG QR codes';
GulpClient.task(task1);

```

QRCode:

[![QRCode](./test/examples/04/output/test-file.png)](./test/examples/04/output/test-file.png)

## API

Please, read the [API reference](/docs/index.md).

## License

[MIT](LICENSE) © [Sergei S. Betke](https://github.com/sergey-s-betke)
