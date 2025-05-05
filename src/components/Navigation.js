import React from 'react';
import { Link } from 'react-router-dom'; // ページ遷移にReact Routerを使用する場合
import './css/Navigation.css'; // スタイルシートをインポート

function Navigation() {
  return (
    <nav className='header-navigation'>
      <ul>
        <li><Link to="/">ホーム</Link></li>
        <li><Link to="/articlelist">学習記事</Link></li>
        <li><Link to="/profile">プロフィール</Link></li>
        <li><Link to="/form">フォーム</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;