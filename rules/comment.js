'use strict';

module.exports = {
    rules: {
        'comment-empty-line-before': ['always', {
            except: ['first-nested'],
            ignore: ['after-comment', 'stylelint-commands']
        }],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'comment-word-blacklist': null
    }
};
