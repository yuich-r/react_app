import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import RecentArticles from '../components/RecentArticles'; // 新着記事コンポーネントをインポート
import './css/Main.css'; // スタイルシートをインポート

import '../components/css/TopPage.css'; // スタイルシートをインポート



function TopPage() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className='main-content'>
        <RecentArticles limit={2} />

      </div>
      <ScrollToTopButton />
      <Footer />
    </div>

  );
}

export default TopPage;