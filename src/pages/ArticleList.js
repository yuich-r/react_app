import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../components/css/ArticleList.css'; // スタイルシートをインポート
import { useState, useEffect } from 'react';
import './css/Main.css'; // スタイルシートをインポート
import PageNation from '../components/PageNation';


function ArticleList() {
  const [receivedData, setReceivedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);



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
    console.log("Loading...")
  }

  if (error) {
    console.log("Error:" + error.message)
  }

  if (receivedData) {
    const handlePageChange = (newPage) => {
      setCurrentPage(newPage);
      // 必要に応じて、新しいページの記事をフェッチするなどの処理を行う
      console.log('Current Page:', newPage);
    };
    return (
      <div className="container">
        <Header />
        <Navigation />
        <div className='main-content'>
          <div className='articles-container'>

            {receivedData.map(data => (
              <a href='/Content' className='article-container'>
                <div className='article-thumnail'>
                  <img src={data.thumbnail.url}></img>
                </div>
                <div className='article-data'>
                  <h2 key={data.id}>{data.title}</h2>

                </div>
                <div className='article-updatedAd'>
                  <h4 key={data.id}>{formatDate(data.updatedAt)}</h4>

                </div>
              </a>


            ))}
            <PageNation
              totalItems={receivedData.length}
              itemsPerPage={10}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </div>

        <ScrollToTopButton />
        <Footer />
      </div>
    );
  }


}
function formatDate(dateString) {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}年${month}月${day}日`;
}

export default ArticleList;