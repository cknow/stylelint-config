'use strict';

module.exports = {
    rules: {
        'comment-empty-line-before': ['always', {
            except: ['first-nested']
        }],
        'comment-no-empty': true,
        'comment-whitespace-inside': 'always',
        'comment-word-blacklist': null
    }
};
