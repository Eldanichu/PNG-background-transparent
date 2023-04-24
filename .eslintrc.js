const isProd = process.env.NODE_ENV === 'production'
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  rules: {
    'no-console': 'off',
    'no-debugger': isProd ? 'error' : 'warn',
    "no-use-before-define": 'error',
    "no-eq-null": "off",
    "no-unused-vars": "off",
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    'semi': [2, "always"],
    "semi-style": [2, "last"],
    "comma-style": [2, "last"]
  },
  overrides: [
    {
      files: ["src/**/*.js", "src/**/*.vue"],
      rules: {
        'no-console': isProd ? 'warn' : 'off',
        'no-debugger': isProd ? 'error' : 'warn',
        "no-use-before-define": isProd ? 'error' : 'error',
        "no-eq-null": isProd ? 'error' : 'warn',
        "no-unused-vars": isProd ? 'off' : 'warn',
        "semi-style": ["warn", "last"],
        "comma-style": ["warn", "last"]
      },
      env: {
        browser: true,
        node: true,
        es6: true,
      }
    },
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)'
      ],
      env: {
        mocha: true
      }
    }
  ]
}
