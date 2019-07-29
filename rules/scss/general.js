'use strict';

module.exports = {
    rules: {
        'scss/no-dollar-variables': null,
        'scss/no-duplicate-dollar-variables': [true, {
            ignoreInside: [
                'at-rule',
                'nested-at-rule'
            ],
            ignoreInsideAtRules: []
        }]
    }
};
