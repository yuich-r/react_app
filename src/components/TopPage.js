import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import { articles } from '../data/articles'; // 記事データをインポート
import RecentArticles from './RecentArticles'; // 新着記事コンポーネントをインポート
import './css/TopPage.css'; // スタイルシートをインポート

function TopPage() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <RecentArticles articles={articles} limit={3} />
      <div className="main-content">
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
}

export default TopPage;