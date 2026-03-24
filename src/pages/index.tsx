import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className="flex flex-col items-center gap-6 py-16 px-4 text-center">
      <h1 className="text-4xl font-bold">{siteConfig.title}</h1>
      <p className="text-xl text-gray-600 max-w-2xl">
        {siteConfig.tagline}
      </p>
      <p className="text-base text-gray-500 max-w-xl">
        이 사이트는 TinaCMS와 Docusaurus를 결합한 Tinasaurus 템플릿의 예제
        문서 사이트입니다. 마크다운 기반 문서 작성과 시각적 콘텐츠 편집 기능을
        체험해 보세요.
      </p>
      <Link
        className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-lg font-semibold text-white no-underline hover:bg-green-700 hover:text-white transition-colors"
        to="/docs/intro"
      >
        예제 문서 보기 →
      </Link>
    </header>
  );
}

export default function Home(): React.JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description={siteConfig.tagline}
    >
      <main className="flex flex-col items-center">
        <HomepageHeader />
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
