import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../components/css/Article.css';
import './css/Main.css'; // スタイルシートをインポート


function Article() {
  return (

    <div className="container">
      <Header />
      <Navigation />
      <div className='main-content'>
        <h2 className='content-h2'>コンテンツ1</h2>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <h2 className='content-h2'>コンテンツ2</h2>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <h2 className='content-h2'>コンテンツ3</h2>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>
        <p>ここにブログのコンテンツが表示されます。</p>


      </div>

      <ScrollToTopButton />

      <Footer />

    </div >



  );
}

export default Article;