import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../components/css/Main.css'; // スタイルシートをインポート
import NotionDataFetcher from '../components/NotionDB';

function ArticleList() {
  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className="main-content">
        <main>
          <p>CHANGE</p>
          <div className='article'>
            <NotionDataFetcher title=""/>
          </div>
        </main>
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
  );
}

// 日付をフォーマットする関数 (例: YYYY年MM月DD日)
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
}

export default ArticleList;