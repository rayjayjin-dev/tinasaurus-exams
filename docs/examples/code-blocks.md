---
title: 코드 블록
sidebar_position: 2
---

# 코드 블록

Docusaurus는 [Prism](https://prismjs.com/) 기반의 구문 강조를 지원합니다. 이 문서에서는 다양한 프로그래밍 언어의 코드 블록 기능을 시연합니다.

## JavaScript

```javascript
// 배열 메서드 활용 예제
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map((n) => n * 2);
const evens = numbers.filter((n) => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log('원본:', numbers);
console.log('두 배:', doubled);
console.log('짝수:', evens);
console.log('합계:', sum);
```

## TypeScript

```typescript
// 인터페이스와 제네릭 활용 예제
interface ApiResponse<T> {
  data: T;
  status: number;
  message: string;
}

async function fetchData<T>(url: string): Promise<ApiResponse<T>> {
  const response = await fetch(url);
  const data: T = await response.json();

  return {
    data,
    status: response.status,
    message: 'success',
  };
}
```

## Python

```python
# 데코레이터 패턴 예제
from functools import wraps
import time

def timer(func):
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 실행 시간: {end - start:.4f}초")
        return result
    return wrapper

@timer
def slow_function():
    time.sleep(1)
    return "완료"
```

## Bash

```bash
# 프로젝트 초기화 스크립트
#!/bin/bash

echo "프로젝트를 초기화합니다..."
npm install
npm run build
echo "빌드가 완료되었습니다!"
```

## JSON

```json
{
  "name": "tinasaurus-exams",
  "version": "1.0.0",
  "scripts": {
    "start": "docusaurus start",
    "build": "docusaurus build"
  }
}
```

## CSS

```css
/* Tailwind CSS와 커스텀 스타일 조합 */
:root {
  --primary-color: #2e8555;
  --background-color: #ffffff;
}

.custom-card {
  border-radius: 8px;
  padding: 1.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;
}

.custom-card:hover {
  transform: translateY(-2px);
}
```

## 코드 블록 제목 표시

코드 블록에 제목을 추가할 수 있습니다:

```javascript title="src/utils/helper.js"
export function formatDate(date) {
  return new Intl.DateTimeFormat('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
}
```

## 라인 강조

특정 라인을 강조 표시할 수 있습니다:

```typescript {2,5-7}
function processItems(items: string[]) {
  // highlight-next-line
  const filtered = items.filter(Boolean);

  return filtered.map((item) => ({
    value: item.trim(),
    length: item.length,
  }));
}
```

## 요약

| 기능 | 문법 | 설명 |
|------|------|------|
| 구문 강조 | ` ```언어 ` | 언어별 색상 강조 |
| 제목 표시 | `title="파일명"` | 코드 블록 상단에 파일명 표시 |
| 라인 강조 | `{줄번호}` | 특정 라인 배경색 강조 |
