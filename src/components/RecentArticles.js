// src/components/RecentArticles.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/RecentArticles.css';
import { useState, useEffect } from 'react';



function RecentArticles(props) {
    // 投稿日でソートして新しい順に並べる
    // 指定された件数だけ取得
    const [receivedData, setReceivedData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchMicroCMSData = async () => {
            try {
                const response = await fetch(
                    'https://n04zzetige.microcms.io/api/v1/blog',
                    {
                        headers: {
                            'X-MICROCMS-API-KEY': '7Q7S3mQ28Vo2tLqeyvNJYOMpvmkaAaAprggn',
                        },
                    }
                );

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const jsonData = await response.json();
                setReceivedData(jsonData.contents);
                setLoading(false);

            } catch (e) {
                setError(e);
                setLoading(false);
            }
        };

        fetchMicroCMSData();
    }, []); // 空の依存配列は、コンポーネントのマウント時に一度だけ実行することを意味します

    if (loading) {
        <div className="recent-articles">
            <h2>Loading</h2>
            {console.log(loading)}
        </div >
    }

    if (error) {
        console.log("Error:" + error.message)
    }

    if (receivedData) {
        console.log(receivedData[0].tags[0].name)
        const sortedDatas = [...receivedData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        // 指定された件数だけ取得
        const recentDatas = sortedDatas.slice(0, props.limit);
        var ArticleValueFlg = true;
        if (receivedData.length <= 5) {
            ArticleValueFlg = false;
        } else {
            ArticleValueFlg = true;
        }

        return (
            <div className='content-block'>
                <div className="recent-articles">
                    <h2>新着記事</h2>
                    <div className='article-category'>
                        <div className='article-category-KBN'>
                            <p>区分</p>
                            <div className='article-KBN'>
                                <ol>
                                    {recentDatas.map((article) => (
                                        <li key={article.id}>
                                            <Link to={`/articles/${article.id}`}>{article.KBN}</Link>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className='article-category-title'>
                            <p>タイトル</p>
                            <div className='article-title'>
                                <ol>
                                    {recentDatas.map((article) => (
                                        <li key={article.id}>
                                            <Link to={`/Content?id=` + article.id}>{article.title}</Link>
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className='article-category-date'>
                            <p>作成日</p>
                            <div className='article-date'>
                                <ol>
                                    {recentDatas.map((article) => (
                                        <li key={article.id}>
                                            <span>{formatDate(article.createdAt)}</span>
                                        </li>
                                    ))}
                                </ol>
                            </div>

                        </div>
                    </div>
                    <div className='article-news'>



                    </div>
                    {ArticleValueFlg && <a href='/articleList' className='more-news-link'>もっと見る</a>}

                </div >

            </div>


        );
    }


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