import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import RecentArticles from '../components/RecentArticles'; // 新着記事コンポーネントをインポート
import './css/Main.css'; // スタイルシートをインポート
import ProfileContent from '../components/ProfileContent';

import './css/TopPage.css'; // スタイルシートをインポート



function TopPage() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className='toppage-main-content'>
        <div className='toppage-content-block '>
          <RecentArticles limit={2} />
        </div>
        <div className='toppage-content-block '>
          <div className='git-glass'>
            <h2 >Githubの草</h2>
            <img src="https://github-contributions-api.deno.dev/yuich-r.svg" />
          </div>

        </div>
        <div className='toppage-content-block '>
          <ProfileContent />
        </div>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>

  );
}

export default TopPage;