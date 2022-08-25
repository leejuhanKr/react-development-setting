# react-development-setting

react 기반 클라이언트 초기 작업환경 세팅

## 과정

1. create-react-app

```
$npx create-react-app
```

2. [필요없는 파일, 코드라인 삭제](https://github.com/leejuhanKr/react-development-setting/commit/590cb7405dff7ea4e4e479cbb2625bfdf19a6ec0)

- public 폴더에서 index.html , favicon.ico 파일만 제외하고 모두 삭제
- src 폴더에서 app.js, index.js 파일만 제외하고 모두 삭제
- src 폴더에서 app.js, index.js 필요없는 코드라인 삭제

3. [install React Router](https://github.com/leejuhanKr/react-development-setting/commit/4f617b5d966d7d654c4a97e7861dca6927480c5e)

```
$npm install react-router-dom
```

4. [src 폴더 정리, .env 파일 생성](https://github.com/leejuhanKr/react-development-setting/commit/12a9f76569c673898827f39ab8fb02d5f4b864e7)

5. [eslint-config-airbnb && pritter](https://github.com/leejuhanKr/react-development-setting/commit/46370cea8f0d4f579f9d9910af701e00c5ca3e95)

```
$eslint-config-airbnb
```

- .eslintrc.js 생성
- .prettierrc.js 생성
  [참고](https://velog.io/@cookncoding/ESLint-Prettier-Airbnb-Style-Guide%EB%A1%9C-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8-%EC%84%B8%ED%8C%85%ED%95%98%EA%B8%B0)
