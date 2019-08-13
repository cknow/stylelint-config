module.exports = {
  rules: {
    'at-rule-blacklist': null,
    'at-rule-empty-line-before': ['always', {
      except: [
        'after-same-name',
        'inside-block',
        'blockless-after-blockless',
        'blockless-after-same-name-blockless',
        'first-nested'
      ],
      ignore: [
        'inside-block'
      ],
      ignoreAtRules: [
        'else'
      ]
    }],
    'at-rule-name-case': 'lower',
    'at-rule-name-newline-after': 'always-multi-line',
    'at-rule-name-space-after': 'always-single-line',
    'at-rule-no-unknown': [true, {
      ignoreAtRules: []
    }],
    'at-rule-no-vendor-prefix': true,
    'at-rule-property-requirelist': null,
    'at-rule-semicolon-newline-after': 'always',
    'at-rule-semicolon-space-before': 'never',
    'at-rule-whitelist': null
  }
}
