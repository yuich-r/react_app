import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { articles } from '../data.js'; // 記事データをインポート
import RecentArticles from '../components/RecentArticles'; // 新着記事コンポーネントをインポート
import '../components/css/TopPage.css'; // スタイルシートをインポート

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