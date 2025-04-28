import React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import Sidebar from './Sidebar';
import Content from './Content';
import Footer from './Footer';
import ScrollToTopButton from './ScrollToTopButton';
import './css/Main.css'; // スタイルシートをインポート

function TopPage() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className="main-content">
        <Content />
        <Sidebar />
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
}

export default TopPage;