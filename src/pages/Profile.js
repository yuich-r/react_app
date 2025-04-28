import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../components/css/Profile.css'; // スタイルシートをインポート

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