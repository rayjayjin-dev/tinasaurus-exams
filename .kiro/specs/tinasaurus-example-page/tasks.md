# 구현 계획: Tinasaurus 예제 페이지

## 개요

Tinasaurus(TinaCMS + Docusaurus) 기반 예제 문서 사이트를 구축하고, Tailwind CSS 스타일링을 적용하며, GitHub Actions를 통해 GitHub Pages에 자동 배포하는 파이프라인을 구성합니다. 각 태스크는 이전 태스크의 결과물 위에 점진적으로 구현됩니다.

## Tasks

- [ ] 1. Tinasaurus 프로젝트 초기화 및 핵심 설정
  - [x] 1.1 프로젝트 디렉토리 구조 생성 및 `package.json` 작성
    - Tinasaurus 템플릿 기반 디렉토리 구조(`docs/`, `src/`, `static/`, `tina/`) 생성
    - `package.json`에 Docusaurus, TinaCMS, React 등 핵심 의존성 명시
    - 빌드/개발 스크립트(`build`, `start`, `clear`) 정의
    - _Requirements: 1.1, 1.2, 1.4_

  - [x] 1.2 `docusaurus.config.ts` 설정 파일 작성
    - 사이트 제목, URL, baseUrl(GitHub Pages용) 설정
    - 프리셋(docs, blog, theme) 및 테마 설정(navbar, footer, colorMode)
    - `i18n` 기본 로케일 설정
    - `trailingSlash: false` 설정
    - _Requirements: 1.3, 4.4, 6.2, 6.3_

  - [x] 1.3 `tina/config.ts` TinaCMS 설정 파일 작성
    - 정적 빌드 모드 설정(`clientId: null`, `token: null`)
    - `build.outputFolder`, `build.publicFolder` 경로 설정
    - `docs` 컬렉션 스키마 정의(name, label, path, format, fields)
    - _Requirements: 1.1, 1.2_

  - [~] 1.4 `sidebars.ts` 사이드바 설정 파일 작성
    - 자동 생성 사이드바 또는 수동 사이드바 항목 정의
    - 예제 문서 카테고리 구조 반영
    - _Requirements: 2.3_

  - [~] 1.5 `tsconfig.json` TypeScript 설정 파일 작성
    - Docusaurus 프로젝트에 적합한 TypeScript 컴파일러 옵션 설정
    - _Requirements: 1.1_

- [ ] 2. Tailwind CSS 통합 설정
  - [ ] 2.1 Tailwind CSS 의존성 추가 및 설정 파일 작성
    - `package.json`에 `tailwindcss`, `postcss`, `autoprefixer` devDependencies 추가
    - `tailwind.config.js` 작성: content 경로, darkMode(`['class', '[data-theme="dark"]']`), `corePlugins.preflight: false`
    - `postcss.config.js` 작성: tailwindcss, autoprefixer 플러그인 등록
    - _Requirements: 7.1, 7.2, 7.3, 7.5_

  - [ ] 2.2 Docusaurus Tailwind CSS 통합 플러그인 작성
    - `src/plugins/tailwind-plugin.cjs` 파일 생성
    - `configurePostCss` 메서드로 PostCSS 파이프라인에 Tailwind 통합
    - `docusaurus.config.ts`의 `plugins` 배열에 플러그인 경로 등록
    - _Requirements: 7.6_

  - [ ] 2.3 `src/css/custom.css`에 Tailwind 디렉티브 추가
    - `@tailwind base`, `@tailwind components`, `@tailwind utilities` 디렉티브 추가
    - Docusaurus 기본 CSS 변수(`:root`, `[data-theme='dark']`) 유지
    - _Requirements: 7.4, 7.7_

- [ ] 3. 홈페이지 구현
  - [ ] 3.1 `src/pages/index.tsx` 홈페이지 컴포넌트 작성
    - Docusaurus `Layout` 컴포넌트를 활용한 페이지 구조
    - 사이트 목적 설명 소개 텍스트 표시
    - 예제 문서 페이지로 이동하는 링크/버튼 제공
    - Tailwind 유틸리티 클래스를 활용한 레이아웃 스타일링
    - _Requirements: 3.1, 3.2, 3.3_

  - [ ] 3.2 `src/components/HomepageFeatures/index.tsx` 기능 소개 컴포넌트 작성
    - 사이트 주요 기능을 소개하는 카드형 컴포넌트
    - `styles.module.css` CSS 모듈과 Tailwind 유틸리티 클래스 병행 사용
    - _Requirements: 3.1, 6.1, 6.2_

- [ ] 4. 예제 문서 콘텐츠 작성
  - [ ] 4.1 `docs/intro.md` 소개 문서 작성
    - YAML 프론트매터(title, sidebar_position) 포함
    - Tinasaurus 소개 본문 텍스트 작성
    - 최소 하나의 코드 블록 포함
    - _Requirements: 2.1, 2.2, 2.4_

  - [ ] 4.2 `docs/examples/_category_.json` 카테고리 설정 및 예제 문서 작성
    - `_category_.json`으로 사이드바 카테고리(label, position) 설정
    - `docs/examples/markdown-features.md` 작성: 마크다운 기능 시연(제목, 목록, 링크, 이미지 등)
    - `docs/examples/code-blocks.md` 작성: 코드 블록 기능 시연(구문 강조, 라인 번호 등)
    - 모든 문서에 YAML 프론트매터, 본문, 코드 블록 포함
    - _Requirements: 2.1, 2.2, 2.3, 2.4_

  - [ ]* 4.3 Property 1 속성 기반 테스트 작성: 예제 문서 콘텐츠 완전성
    - **Property 1: 예제 문서 콘텐츠 완전성**
    - `docs/` 디렉토리의 모든 마크다운 파일에 대해 YAML 프론트매터(title 필드), 본문 텍스트, 최소 하나의 코드 블록 존재 여부를 검증하는 속성 기반 테스트 작성
    - Jest + fast-check 프레임워크 사용
    - Tag: `Feature: tinasaurus-example-page, Property 1: 예제 문서 콘텐츠 완전성`
    - **Validates: Requirements 2.1, 2.2**

- [ ] 5. 체크포인트 - 로컬 빌드 검증
  - 모든 설정 파일과 콘텐츠가 올바르게 작성되었는지 확인
  - `npm run build` 실행하여 정적 빌드가 오류 없이 완료되는지 검증
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 6. GitHub Actions 배포 워크플로우 구성
  - [ ] 6.1 `.github/workflows/deploy.yml` 워크플로우 파일 작성
    - `push` → `main` 브랜치 트리거 설정
    - `permissions` 설정(contents: read, pages: write, id-token: write)
    - 빌드 잡 정의: checkout → setup-node → npm install → npm run build → GitHub Pages 배포
    - `actions/configure-pages`, `actions/upload-pages-artifact`, `actions/deploy-pages` 액션 활용
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]* 6.2 GitHub Actions 워크플로우 단위 테스트 작성
    - 워크플로우 YAML 파일 파싱하여 트리거 조건(main 브랜치 push) 검증
    - 필수 단계(checkout, setup-node, install, build, deploy) 순서 검증
    - permissions 설정 검증
    - _Requirements: 5.1, 5.2, 5.3_

- [ ] 7. 정적 리소스 및 통합 마무리
  - [ ] 7.1 `static/img/` 디렉토리에 기본 이미지 리소스 배치
    - 파비콘, 로고 등 기본 정적 이미지 파일 배치
    - _Requirements: 1.1_

  - [ ] 7.2 전체 컴포넌트 연결 및 설정 최종 확인
    - `docusaurus.config.ts`에 모든 플러그인(Tailwind 포함) 등록 확인
    - 사이드바 설정과 실제 문서 경로 일치 확인
    - 홈페이지에서 예제 문서로의 네비게이션 동작 확인
    - baseUrl이 GitHub Pages 경로와 일치하는지 확인
    - _Requirements: 1.3, 2.3, 3.2, 4.4, 7.6_

  - [ ]* 7.3 설정 파일 및 Tailwind CSS 통합 단위 테스트 작성
    - `docusaurus.config.ts` 필수 필드(title, url, baseUrl, colorMode) 검증
    - `package.json` 의존성(TinaCMS, Docusaurus, Tailwind CSS) 포함 검증
    - `tailwind.config.js` 설정(content, preflight, darkMode) 검증
    - `postcss.config.js` 플러그인 등록 검증
    - Tailwind 플러그인 파일 존재 및 `configurePostCss` 메서드 구현 검증
    - _Requirements: 1.2, 1.3, 6.3, 7.1, 7.2, 7.3, 7.5, 7.6_

- [ ] 8. 최종 체크포인트 - 전체 빌드 및 테스트 검증
  - 모든 테스트가 통과하는지 확인
  - `npm run build`로 최종 정적 빌드 성공 검증
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- `*` 표시된 태스크는 선택 사항이며, 빠른 MVP를 위해 건너뛸 수 있습니다
- 각 태스크는 특정 요구사항을 참조하여 추적 가능합니다
- 체크포인트를 통해 점진적으로 검증합니다
- 속성 기반 테스트는 보편적 정확성 속성을 검증합니다
- 단위 테스트는 특정 예시와 엣지 케이스를 검증합니다
