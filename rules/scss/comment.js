module.exports = {
  rules: {
    'scss/comment-no-loud': true,
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
    'scss/double-slash-comment-whitespace-inside': 'always'
  }
}
