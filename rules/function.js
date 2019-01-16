'use strict';

module.exports = {
    rules: {
        'function-blacklist': null,
        'function-calc-no-invalid': true,
        'function-calc-no-unspaced-operator': true,
        'function-comma-newline-after': 'always-multi-line',
        'function-comma-newline-before': 'never-multi-line',
        'function-comma-space-after': 'always-single-line',
        'function-comma-space-before': 'never',
        'function-linear-gradient-no-nonstandard-direction': true,
        'function-max-empty-lines': 0,
        'function-name-case': ['lower', {
            ignoreFunctions: []
        }],
        'function-parentheses-newline-inside': 'always-multi-line',
        'function-parentheses-space-inside': 'never-single-line',
        'function-url-no-scheme-relative': true,
        'function-url-quotes': ['always', {
            except: []
        }],
        'function-url-scheme-blacklist': null,
        'function-url-scheme-whitelist': null,
        'function-whitelist': null,
        'function-whitespace-after': 'always'
    }
};
