module.exports = {
  defaultSeverity: 'error',
  extends: [
    './rules/at-rule.js',
    './rules/block.js',
    './rules/color.js',
    './rules/comment.js',
    './rules/custom-media.js',
    './rules/custom-property.js',
    './rules/declaration.js',
    './rules/declaration-block.js',
    './rules/font-family.js',
    './rules/font-weight.js',
    './rules/function.js',
    './rules/general.js',
    './rules/keyframe-declaration.js',
    './rules/length.js',
    './rules/media-feature.js',
    './rules/media-query-list.js',
    './rules/number.js',
    './rules/property.js',
    './rules/rule.js',
    './rules/selector.js',
    './rules/selector-list.js',
    './rules/shorthand-property.js',
    './rules/string.js',
    './rules/time.js',
    './rules/unit.js',
    './rules/value.js',
    './rules/value-list.js'
  ].map(require.resolve)
}
