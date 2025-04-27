// src/components/RecentArticles.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/RecentArticles.css';

function RecentArticles({ articles, limit = 5 }) {
  // 投稿日でソートして新しい順に並べる
  const sortedArticles = [...articles].sort((a, b) => new Date(b.date) - new Date(a.date));
  // 指定された件数だけ取得
  const recentArticles = sortedArticles.slice(0, limit);

  return (
    <div className="recent-articles">
        <div className='article-category'>
            <div className='article-category-KBN'>
                <p>区分</p>
            </div>
            <div className='article-category-title'>
                <p>タイトル</p>
            </div>
            <div className='article-category-date'>
                <p>更新日</p>
            </div>
        </div>
        <div className='article-news'>
            <div className='article-KBN'>
            <ol>
                    {recentArticles.map((article) => (
                        <li key={article.id}>
                            <Link to={`/articles/${article.id}`}>{article.KBN}</Link>
                        </li>
                    ))}
                </ol>
            </div>
            <div className='article-title'>
                <ol>
                    {recentArticles.map((article) => (
                        <li key={article.id}>
                            <Link to={`/Content`}>{article.title}</Link>
                        </li>
                    ))}
                </ol>
            </div>
            <div className='article-date'>
                <ol>
                    {recentArticles.map((article) => (
                        <li key={article.id}>
                            <span>{formatDate(article.date)}</span>
                        </li>
                    ))}
                </ol>
            </div>
  
        </div> 
        <a href='/Articles' className='more-news-link'>もっと見る</a>
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

export default RecentArticles;