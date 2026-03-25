import { watch } from 'chokidar';
import { execSync } from 'child_process';
import { resolve } from 'path';

const WATCH_PATHS = [
  resolve('docs'),
  resolve('src'),
  resolve('static'),
];

const DEBOUNCE_MS = 5000;
let timer = null;

function gitCommitAndPush() {
  try {
    const status = execSync('git status --porcelain', { encoding: 'utf-8' }).trim();
    if (!status) {
      console.log('[auto-commit] 변경 사항 없음, 건너뜀');
      return;
    }

    console.log('[auto-commit] 변경 감지, 커밋 중...');
    execSync('git add -A', { stdio: 'inherit' });

    const timestamp = new Date().toLocaleString('ko-KR');
    execSync(`git commit -m "docs: 콘텐츠 자동 저장 (${timestamp})"`, { stdio: 'inherit' });

    console.log('[auto-commit] push 중...');
    execSync('git push', { stdio: 'inherit' });
    console.log('[auto-commit] push 완료');
  } catch (err) {
    console.error('[auto-commit] 오류:', err.message);
  }
}

function scheduleCommit() {
  if (timer) clearTimeout(timer);
  timer = setTimeout(gitCommitAndPush, DEBOUNCE_MS);
}

const watcher = watch(WATCH_PATHS, {
  ignoreInitial: true,
  ignored: /(^|[\/\\])\../,
});

watcher
  .on('change', (path) => {
    console.log(`[auto-commit] 파일 변경: ${path}`);
    scheduleCommit();
  })
  .on('add', (path) => {
    console.log(`[auto-commit] 파일 추가: ${path}`);
    scheduleCommit();
  })
  .on('unlink', (path) => {
    console.log(`[auto-commit] 파일 삭제: ${path}`);
    scheduleCommit();
  });

console.log('[auto-commit] 파일 감시 시작 (docs/, src/, static/)');
console.log('[auto-commit] 변경 후 5초 대기 후 자동 커밋 & push');
