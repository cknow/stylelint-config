'use strict';

module.exports = {
    rules: {
        'selector-attribute-brackets-space-inside': 'never',
        'selector-attribute-operator-blacklist': null,
        'selector-attribute-operator-space-after': 'never',
        'selector-attribute-operator-space-before': 'never',
        'selector-attribute-operator-whitelist': null,
        'selector-attribute-quotes': 'always',
        'selector-class-pattern': null,
        'selector-combinator-blacklist': null,
        'selector-combinator-space-after': 'always',
        'selector-combinator-space-before': 'always',
        'selector-combinator-whitelist': null,
        'selector-descendant-combinator-no-non-space': true,
        'selector-id-pattern': null,
        'selector-max-attribute': 4,
        'selector-max-class': 4,
        'selector-max-combinators': 4,
        'selector-max-compound-selectors': 4,
        'selector-max-empty-lines': 0,
        'selector-max-id': 4,
        'selector-max-specificity': ['4,4,4', {
            ignoreSelectors: []
        }],
        'selector-max-type': [4, {
            ignore: ['child', 'compounded', 'descendant']
        }],
        'selector-max-universal': 4,
        'selector-nested-pattern': null,
        'selector-no-qualifying-type': [true, {
            ignore: ['attribute', 'class', 'id']
        }],
        'selector-no-vendor-prefix': true,
        'selector-pseudo-class-blacklist': null,
        'selector-pseudo-class-case': 'lower',
        'selector-pseudo-class-no-unknown': true,
        'selector-pseudo-class-parentheses-space-inside': 'never',
        'selector-pseudo-class-whitelist': null,
        'selector-pseudo-element-case': 'lower',
        'selector-pseudo-element-colon-notation': 'single',
        'selector-pseudo-element-no-unknown': true,
        'selector-type-case': 'lower',
        'selector-type-no-unknown': true
    }
};
