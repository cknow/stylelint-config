# StyleLint Config

> StyleLint [shareable config](https://stylelint.io/user-guide/cli/)

[![NPM Version](https://img.shields.io/npm/v/@cknow/stylelint-config.svg)](https://www.npmjs.com/package/@cknow/stylelint-config)
[![Downloads](https://img.shields.io/npm/dt/@cknow/stylelint-config.svg)](https://www.npmjs.com/package/@cknow/stylelint-config)
[![MIT License](https://img.shields.io/npm/l/@cknow/stylelint-config.svg)](LICENSE)

[![Build Status](https://travis-ci.org/cknow/stylelint-config.svg?branch=master)](https://travis-ci.org/cknow/stylelint-config)
[![Build status](https://ci.appveyor.com/api/projects/status/5xw04qn16e40n6i7/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/stylelint-config/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/cknow/stylelint-config/badge.svg?branch=master)](https://coveralls.io/github/cknow/stylelint-config?branch=master)

[![Code Climate](https://codeclimate.com/github/cknow/stylelint-config/badges/gpa.svg)](https://codeclimate.com/github/cknow/stylelint-config)
[![Test Coverage](https://codeclimate.com/github/cknow/stylelint-config/badges/coverage.svg)](https://codeclimate.com/github/cknow/stylelint-config/coverage)
[![Issue Count](https://codeclimate.com/github/cknow/stylelint-config/badges/issue_count.svg)](https://codeclimate.com/github/cknow/stylelint-config)

[![Dependencies Status](https://david-dm.org/cknow/stylelint-config/status.svg)](https://david-dm.org/cknow/stylelint-config)
[![devDependencies Status](https://david-dm.org/cknow/stylelint-config/dev-status.svg)](https://david-dm.org/cknow/stylelint-config?type=dev)
[![peerDependencies Status](https://david-dm.org/cknow/stylelint-config/peer-status.svg)](https://david-dm.org/cknow/stylelint-config?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/cknow/stylelint-config.svg)](http://isitmaintained.com/project/cknow/stylelint-config)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/cknow/stylelint-config.svg)](http://isitmaintained.com/project/cknow/stylelint-config)
[![Gitter](https://badges.gitter.im/cknow/stylelint-config.svg)](https://gitter.im/cknow/stylelint-config?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

## Install

```bash
npm install --save-dev @cknow/stylelint-config
```

## Usage

> StyleLint [configuration](https://stylelint.io/user-guide/configuration/)

Add some StyleLint config to your `.stylelintrc`:

```json
{
    "extends": "@cknow/stylelint-config"
}
```

## Usage direct on command line

```bash
stylelint --config ./node_modules/@cknow/stylelint-config/index.js
```

> **Note:** It is not necessary to create the `.stylelintrc` file.
