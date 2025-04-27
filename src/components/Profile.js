import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import './css/Profile.css'; // スタイルシートをインポート

function TopPage() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className="main-content">
      <h1>Profile Page</h1>
      <h1>作成中🏗️🏗️🏗️</h1>
      </div>
      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default TopPage;