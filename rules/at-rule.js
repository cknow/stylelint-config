'use strict';

module.exports = {
    rules: {
        'at-rule-blacklist': null,
        'at-rule-empty-line-before': ['always', {
            except: [
                'after-same-name',
                'inside-block',
                'blockless-after-same-name-blockless',
                'blockless-after-blockless',
                'first-nested'
            ]
        }],
        'at-rule-name-case': 'lower',
        'at-rule-name-newline-after': 'always-multi-line',
        'at-rule-name-space-after': 'always',
        'at-rule-no-unknown': true,
        'at-rule-no-vendor-prefix': true,
        'at-rule-semicolon-newline-after': 'always',
        'at-rule-semicolon-space-before': 'never',
        'at-rule-whitelist': null
    }
};
