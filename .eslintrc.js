module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb',
    // 'prettier/react',
    'eslint:recommended',
    'plugin:react/jsx-runtime',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/jsx-filename-extension': [
      'error',
      {
        extensions: ['.jsx'],
      },
    ],
    'import/prefer-default-export': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' }, // 함수형 컴포넌트 형식 정의
    ],
  },
};
