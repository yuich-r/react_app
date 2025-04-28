import React from 'react';
import './css/Sidebar.css'; 

function Sidebar() {
  return (
    <aside>
      <ol>
        <li>おすすめ記事</li>
        <li>最近の投稿</li>
        <li>カテゴリ</li>
      </ol>
    </aside>
  );
}

export default Sidebar;