module.exports = {
  rules: {
    'block-closing-brace-empty-line-before': ['never', {
      except: []
    }],
    'block-closing-brace-newline-after': ['always', {
      ignoreAtRules: [
        'if',
        'else'
      ]
    }],
    'block-closing-brace-newline-before': 'always-multi-line',
    'block-closing-brace-space-after': null,
    'block-closing-brace-space-before': 'always-single-line',
    'block-no-empty': [true, {
      ignore: ['comments']
    }],
    'block-opening-brace-newline-after': 'always-multi-line',
    'block-opening-brace-newline-before': null,
    'block-opening-brace-space-after': 'always-single-line',
    'block-opening-brace-space-before': ['always', {
      ignoreAtRules: []
    }]
  }
}
