<!-- markdownlint-configure-file
{
  "default": true,
  "line-length": false,
  "no-duplicate-heading": false,
  "no-multiple-blanks": false
}
-->
# 📓 Changelog

All notable changes to this project will be documented in this file. See
[Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [1.1.6](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.1.5...v1.1.6) (2026-01-07)


### Bug Fixes

* **plugin:** file2qr type incompatibility for pipe ([5a869a5](https://github.com/IT-Service-NPM/gulp-file2qr/commit/5a869a50f9bee03c8337d9073d0b3f654109d4f2)), closes [#26](https://github.com/IT-Service-NPM/gulp-file2qr/issues/26) [#25](https://github.com/IT-Service-NPM/gulp-file2qr/issues/25)

## [1.1.5](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.1.4...v1.1.5) (2026-01-04)


### Bug Fixes

* **github-actions:** restore and tune release-notes-generator config ([0bdc680](https://github.com/IT-Service-NPM/gulp-file2qr/commit/0bdc680de7b92cf032f8726d26c570ac1d1b8776))

## [1.1.4](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.1.3...v1.1.4) (2026-01-04)

* Merge branch 'main' of github.com:IT-Service-NPM/gulp-file2qr ([17b5689](https://github.com/IT-Service-NPM/gulp-file2qr/commit/17b5689))
* fix(plugin): dynamic require is not supported ([16fdcaf](https://github.com/IT-Service-NPM/gulp-file2qr/commit/16fdcaf)), closes [#16](https://github.com/IT-Service-NPM/gulp-file2qr/issues/16)

## [1.1.3](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.1.2...v1.1.3) (2026-01-03)

* Merge branch 'main' of github.com:IT-Service-NPM/gulp-file2qr ([b9c4b67](https://github.com/IT-Service-NPM/gulp-file2qr/commit/b9c4b67))
* fix(plugin): fix "dynamic require is not supported" ([7287bdb](https://github.com/IT-Service-NPM/gulp-file2qr/commit/7287bdb)), closes [#16](https://github.com/IT-Service-NPM/gulp-file2qr/issues/16)

## [1.1.2](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.1.1...v1.1.2) (2026-01-02)

* fix(plugin): use stream-composer ([282d2ab](https://github.com/IT-Service-NPM/gulp-file2qr/commit/282d2ab))
* build: crlf to lf for yml, update deps ([46288dc](https://github.com/IT-Service-NPM/gulp-file2qr/commit/46288dc))
* build(deps): bump @vitest/coverage-istanbul from 2.1.9 to 3.1.2 ([2b062dd](https://github.com/IT-Service-NPM/gulp-file2qr/commit/2b062dd))
* build(deps): bump tsdoc-markdown from 0.6.3 to 1.0.0 ([701c955](https://github.com/IT-Service-NPM/gulp-file2qr/commit/701c955))
* build(deps): bump vitest from 2.1.9 to 3.1.2 ([ecc4377](https://github.com/IT-Service-NPM/gulp-file2qr/commit/ecc4377))

## [1.1.1](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.1.0...v1.1.1) (2024-12-01)

### Bug Fixes

* fix tsup bundle options - just for NodeJS ([f990d0d](https://github.com/IT-Service-NPM/gulp-file2qr/commit/f990d0d99d12428f8de22fdd19d5122e14d5cb10)), closes [#2](https://github.com/IT-Service-NPM/gulp-file2qr/issues/2)

### Other Updates

* remove unused type URLFile ([828747a](https://github.com/IT-Service-NPM/gulp-file2qr/commit/828747af903744d0305fcf871c6750955ef52b56))

## [1.1.0](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.0.0...v1.1.0) (2024-12-01)

### Features

* add `buffer` option ([a9369cd](https://github.com/IT-Service-NPM/gulp-file2qr/commit/a9369cddf83c14afbe6b104ab03f241fa4f08ac0))

## 1.0.0 (2024-12-01)

### Features

* url2qr - create qrcode from .url files ([e7852b2](https://github.com/IT-Service-NPM/gulp-file2qr/commit/e7852b248879eceab989449bd325052b10a4db52))

## [1.0.2](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.0.1...v1.0.2) (2024-12-01)

### Bug Fixes

* **plugin:** remove unnecessary error handling in QRCode callback ([628f089](https://github.com/IT-Service-NPM/gulp-file2qr/commit/628f08931a04975e8db101a5f52c6bc335169bc6))

## [1.0.1](https://github.com/IT-Service-NPM/gulp-file2qr/compare/v1.0.0...v1.0.1) (2024-12-01)

### Bug Fixes

* **plugin:** fix url2qr streaming mode ([44059d1](https://github.com/IT-Service-NPM/gulp-file2qr/commit/44059d189fdbfb403a610e27a0b6b91496bf56f4))

## 1.0.0 (2024-11-30)

### Features

* **plugin:** url2qr - convert .url files to PNG QRCode ([1896e7a](https://github.com/IT-Service-NPM/gulp-file2qr/commit/1896e7a799c9a824d06e97968ce59887747e3735))
