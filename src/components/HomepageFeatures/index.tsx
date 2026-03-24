import React from 'react';
import styles from './styles.module.css';

interface Feature {
  title: string;
  icon: string;
  iconBg: string;
  description: string;
}

const featureList: Feature[] = [
  {
    title: '마크다운 문서',
    icon: '📝',
    iconBg: 'bg-blue-100 text-blue-600',
    description:
      '마크다운과 MDX로 문서를 작성하세요. 프론트매터, 코드 블록, 이미지 등 풍부한 콘텐츠를 지원합니다.',
  },
  {
    title: '시각적 편집',
    icon: '✏️',
    iconBg: 'bg-green-100 text-green-600',
    description:
      'TinaCMS의 시각적 편집기로 콘텐츠를 실시간으로 편집하고 미리보기할 수 있습니다.',
  },
  {
    title: '정적 배포',
    icon: '🚀',
    iconBg: 'bg-purple-100 text-purple-600',
    description:
      'GitHub Actions로 자동 빌드하고 GitHub Pages에 정적 사이트로 배포합니다. 서버가 필요 없습니다.',
  },
];

function FeatureCard({title, icon, iconBg, description}: Feature) {
  return (
    <div className={`${styles.featureCard} p-6`}>
      <div className="flex items-start gap-4">
        <div className={`${styles.featureIcon} ${iconBg}`}>
          {icon}
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400 m-0">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.JSX.Element {
  return (
    <section className="w-full max-w-5xl px-4 py-12">
      <h2 className="text-2xl font-bold text-center mb-8">주요 기능</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureList.map((feature) => (
          <FeatureCard key={feature.title} {...feature} />
        ))}
      </div>
    </section>
  );
}
