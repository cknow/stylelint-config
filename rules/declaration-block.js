module.exports = {
  rules: {
    'declaration-block-no-duplicate-properties': [true, {
      ignore: ['consecutive-duplicates-with-different-values']
    }],
    'declaration-block-no-redundant-longhand-properties': [true, {
      ignoreShorthands: []
    }],
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-semicolon-newline-after': 'always',
    'declaration-block-semicolon-newline-before': 'never-multi-line',
    'declaration-block-semicolon-space-after': 'always-single-line',
    'declaration-block-semicolon-space-before': 'never',
    'declaration-block-single-line-max-declarations': 1,
    'declaration-block-trailing-semicolon': 'always'
  }
}
