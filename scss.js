module.exports = {
  plugins: [
    'stylelint-scss'
  ],
  extends: [
    './',
    './rules/scss/comment.js',
    './rules/scss/declaration.js',
    './rules/scss/each.js',
    './rules/scss/else.js',
    './rules/scss/extend.js',
    './rules/scss/function.js',
    './rules/scss/general.js',
    './rules/scss/if.js',
    './rules/scss/import.js',
    './rules/scss/map.js',
    './rules/scss/media-feature.js',
    './rules/scss/mixin.js',
    './rules/scss/operator.js',
    './rules/scss/partial.js',
    './rules/scss/placeholder.js',
    './rules/scss/rule.js',
    './rules/scss/selector.js',
    './rules/scss/variable.js'
  ].map(require.resolve)
}
