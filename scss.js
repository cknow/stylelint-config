'use strict';

module.exports = {
    extends: [
        require.resolve('./')
    ],
    plugins: [
        'stylelint-scss'
    ],
    rules: {
        'scss/at-each-key-value-single-line': true,
        'scss/at-else-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-else-closing-brace-space-after': 'always-intermediate',
        'scss/at-else-empty-line-before': 'never',
        'scss/at-else-if-parentheses-space-before': 'always',
        'scss/at-if-closing-brace-newline-after': 'always-last-in-chain',
        'scss/at-if-closing-brace-space-after': 'always-intermediate',
        'scss/at-extend-no-missing-placeholder': true,
        'scss/at-function-named-arguments': ['never', {
            ignore: [],
            ignoreFunctions: []
        }],
        'scss/at-function-parentheses-space-before': 'never',
        'scss/at-function-pattern': null,
        'scss/at-import-no-partial-leading-underscore': true,
        'scss/at-import-partial-extension-blacklist': null,
        'scss/at-import-partial-extension-whitelist': null,
        'scss/at-mixin-argumentless-call-parentheses': 'always',
        'scss/at-mixin-named-arguments': ['never', {
            ignore: []
        }],
        'scss/at-mixin-parentheses-space-before': 'never',
        'scss/at-mixin-pattern': null,
        'at-rule-no-unknown': null,
        'scss/at-rule-no-unknown': true,
        'scss/dollar-variable-colon-newline-after': null,
        'scss/dollar-variable-colon-space-after': 'always-single-line',
        'scss/dollar-variable-colon-space-before': 'never',
        'scss/dollar-variable-default': [true, {
            ignore: 'local'
        }],
        'scss/dollar-variable-empty-line-before': ['always', {
            except: [
                'first-nested',
                'after-comment',
                'after-dollar-variable'
            ],
            ignore: [
                'after-comment',
                'inside-single-line-block'
            ]
        }],
        'scss/dollar-variable-no-missing-interpolation': true,
        'scss/dollar-variable-pattern': null,
        'scss/percent-placeholder-pattern': null,
        'scss/double-slash-comment-empty-line-before': ['always', {
            except: [
                'first-nested'
            ],
            ignore: [
                'between-comments',
                'stylelint-commands'
            ]
        }],
        'scss/double-slash-comment-inline': ['never', {
            ignore: []
        }],
        'scss/double-slash-comment-whitespace-inside': 'always',
        'scss/declaration-nested-properties': ['never', {
            except: []
        }],
        'scss/declaration-nested-properties-no-divided-groups': true,
        'scss/media-feature-value-dollar-variable': 'always',
        'scss/operator-no-newline-after': true,
        'scss/operator-no-newline-before': true,
        'scss/operator-no-unspaced': true,
        'scss/partial-no-import': null,
        'scss/selector-no-redundant-nesting-selector': true,
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
