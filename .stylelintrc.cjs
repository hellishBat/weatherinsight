module.exports = {
  extends: ['stylelint-config-recommended', 'stylelint-config-tailwindcss'],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: ['tailwind', 'apply', 'variants', 'responsive', 'screen'],
      },
    ],
    'string-quotes': 'single',
    'font-family-name-quotes': 'always-unless-keyword',
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
  },
}
