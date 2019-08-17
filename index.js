module.exports = {
  extends: ['standard', 'airbnb-base'],
  rules: {
    semi: ['error', 'never'],
    'space-before-function-paren': ['error', 'always'],
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': ['off'],
    'import/prefer-default-export': [1],
    'class-methods-use-this': [1],
    'comma-dangle': ['error', {
      arrays: 'never',
      objects: 'never',
      imports: 'never',
      exports: 'never',
      functions: 'never'
    }]
  }
}
