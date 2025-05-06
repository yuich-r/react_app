import React from 'react';
import './css/Header.css'; // スタイルシートをインポート

function Header() {
  return (
    <header>
      <a className="header-link" href="/">
        <h1>IT学習アウトプットブログ</h1>
      </a>

    </header>
  );
}

export default Header;