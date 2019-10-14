# Stylelint Config

[![Version](https://img.shields.io/npm/v/@datalogix/stylelint-config.svg)](https://www.npmjs.com/package/@datalogix/stylelint-config)
[![Downloads](https://img.shields.io/npm/dt/@datalogix/stylelint-config.svg)](https://www.npmjs.com/package/@datalogix/stylelint-config)
[![Build Status](https://img.shields.io/travis/datalogix/stylelint-config)](https://travis-ci.org/datalogix/stylelint-config)
[![Codecov](https://img.shields.io/codecov/c/github/datalogix/stylelint-config)](https://codecov.io/gh/datalogix/stylelint-config)
[![License](https://img.shields.io/npm/l/@datalogix/stylelint-config.svg)](LICENSE)

> Stylelint [shareable config](https://stylelint.io/user-guide/cli/)

## Install

```bash
npm install --save-dev @datalogix/stylelint-config
```

## Usage

> Stylelint [configuration](https://stylelint.io/user-guide/configuration/)

Add some Stylelint config to your `.stylelintrc`:

```json
{
  "extends": "@datalogix/stylelint-config"
}
```

## Usage direct on command line

```bash
stylelint --config ./node_modules/@datalogix/stylelint-config/index.js
```

> **Note:** It is not necessary to create the `.stylelintrc` file.

## Scss

> styleLint-scss [configuration](https://github.com/kristerkari/stylelint-scss)

Install

```bash
npm install --save-dev stylelint-scss
```

Add some Stylelint config to your `.stylelintrc`:

```json
{
  "extends": "@datalogix/stylelint-config/scss"
}
```
