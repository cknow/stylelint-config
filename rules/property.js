'use strict';

module.exports = {
    rules: {
        'property-blacklist': null,
        'property-case': 'lower',
        'property-no-unknown': [true, {
            checkPrefixed: false,
            ignoreProperties: []
        }],
        'property-no-vendor-prefix': [true, {
            ignoreProperties: []
        }],
        'property-whitelist': null
    }
};
