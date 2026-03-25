---
title: Tinasaurus 소개 업데이트
sidebar_position: 1
---

# Tinasaurus 소개

Tinasaurus는 **TinaCMS**와 **Docusaurus**를 결합한 문서 사이트 생성기입니다. Docusaurus의 강력한 정적 사이트 생성 기능과 TinaCMS의 시각적 콘텐츠 편집 기능을 하나로 통합하여, 개발자가 마크다운 기반의 문서 사이트를 손쉽게 구축하고 관리할 수 있도록 도와줍니다.

## 이 예제 사이트의 목적

이 사이트는 Tinasaurus의 주요 기능을 시연하기 위해 만들어진 예제 프로젝트입니다. 다음과 같은 내용을 확인할 수 있습니다:

* **마크다운 문서 렌더링**: `.md` 파일로 작성된 콘텐츠가 HTML로 변환되어 표시되는 과정
* **사이드바 네비게이션**: 문서 구조에 따라 자동으로 생성되는 탐색 메뉴
* **코드 블록 지원**: 구문 강조가 적용된 코드 예제 표시
* **Tailwind CSS 스타일링**: 유틸리티 클래스를 활용한 커스텀 디자인

## 시작하기

Tinasaurus 프로젝트를 새로 시작하려면 아래 명령어를 실행하세요:

```bash
# 프로젝트 클론 및 의존성 설치
git clone https://github.com/your-username/tinasaurus-exams.git
cd tinasaurus-exams
npm install

# 개발 서버 실행
npm start
```

개발 서버가 실행되면 브라우저에서 `http://localhost:3000`으로 접속하여 사이트를 확인할 수 있습니다.

## 프로젝트 구조

Tinasaurus 프로젝트의 핵심 디렉토리 구조는 다음과 같습니다:

| 디렉토리/파일                | 설명               |
| ---------------------- | ---------------- |
| `docs/`                | 마크다운 문서 콘텐츠      |
| `src/`                 | React 컴포넌트 및 페이지 |
| `tina/`                | TinaCMS 설정       |
| `static/`              | 정적 리소스(이미지 등)    |
| `docusaurus.config.ts` | Docusaurus 핵심 설정 |

다음 섹션에서는 마크다운 기능과 코드 블록 활용법을 더 자세히 살펴보겠습니다.
