import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">来自{siteConfig.title}的问候</h1>
        <p className="hero__subtitle">有什么我们可以帮您的？</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/category/faq">
            🧭 常见问题
          </Link>
          <Link
            className="button button--primary button--lg"
            to="/intro">
            ❤️ 了解微软电脑管家
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`来自${siteConfig.title}的问候`}
      description="我们将在这里为你解答你在使用微软电脑管家的过程中遇到的问题">
      <HomepageHeader />
    </Layout>
  );
}
