# 프로젝트

`Next.js`를 이용한 웹 애플리케이션 보안 과제 입니다. <br/><br/>
`Vercel`를 사용해 배포중입니다.(https://clerk-was-psi.vercel.app)<br>

# 📚 목차

- [기능](#-추가한-기능)
- [현재 프로젝트 구조](#-현재-프로젝트-구조)

# ✏️ 추가한 기능

- MainPage 및 대부분 모든 페이지를 새롭게 구성하였습니다.
- TailwindCSS를 변형했습니다. (상세 Repo의 디렉토리 출력 모습 등..)
- Footer를 새롭게 추가 했습니다. (헤더의 Repo를 푸터 우측 하단에 옮겼습니다.)
- NFT 관련 페이지를 추가 하였습니다. (직접 만든 NFT를 사이트에 소개하는 모습을 추가했습니다.)
- 서버에서 응답한 JSON을 NFT 학습 관련 내용으로 수정했습니다. (NFT도 직접 만들어 볼 수 있습니다.)
- 사용자 편의성을 향상 시켰습니다. (MainPage 돌아가기 등.. )

# ✨ 현재 프로젝트 구조

```
app
├── api
│   ├── courses
│   │   ├── data.json
│   │   ├── route.js
│   │   └── search
│   │       └── route.js
│   └── hello
│       └── route.js
├── courses
│   └── page.jsx
├── dashboard
│   └── page.jsx
├── favicon.ico
├── globals.css
├── layout.js
├── layout.jsx
├── loading.jsx
├── page.jsx
├── profile
│   └── page.jsx
├── repos
│   ├── [name]
│   │   └── page.jsx
│   └── page.jsx
├── sign-in
│   ├── [[...sign-in]]
│   └── page.jsx
└── sign-up
    ├── [[...sign-up]]
    ├── loding.jsx
    └── page.jsx

components
├── CourseSearch.jsx
├── Courses.jsx
├── Footer.jsx
├── Header.jsx
├── Repo.jsx
├── RepoDirs.jsx
└── constants
    └── constants.jsx
```
