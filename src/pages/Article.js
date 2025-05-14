import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { useState, useEffect } from 'react';
import './css/Article.css';
import './css/Main.css'; // スタイルシートをインポート
import { useLocation } from "react-router-dom";
import parse, { domToReact } from 'html-react-parser'



function Article() {
  const [receivedData, setReceivedData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const search = useLocation().search;
  const query = new URLSearchParams(search);
  const queryid = query.get('id')
  const articlelink = 'https://n04zzetige.microcms.io/api/v1/blog/' + queryid;
  console.log(articlelink)



  useEffect(() => {
    const fetchMicroCMSData = async () => {
      try {
        const response = await fetch(
          'https://n04zzetige.microcms.io/api/v1/blog/' + queryid,
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
        setReceivedData(jsonData);
        console.log(receivedData)
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
    const receivedDataContent = receivedData.content
    return (

      <div className="container">
        <Header />
        <Navigation />
        <div className='article-content'>
          {parse(receivedDataContent)}

        </div>

        <ScrollToTopButton />

        <Footer />

      </div >



    );
  }



}

export default Article;