module.exports = {
  rules: {
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
    'scss/dollar-variable-pattern': null
  }
}
