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
import Sidebar from '../components/Sidebar'



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
    const parseData = parse(receivedDataContent)
    var titledata = new Array;
    var titleid = new Array;
    for (var i = 0; i < parseData.length; i++) {
      //console.log(parseData[i].props.children)
      if (parseData[i].type === "h3") {
        titledata.push({ id: i, title: parseData[i].props.children, titleid: parseData[i].props.id })

      }


    }
    console.log(receivedData.description)

    return (

      <div className="container">
        <Header />
        <Navigation />
        <div className='article-content-all'>
          <div className='article-content'>
            <h2>{receivedData.title}</h2>
            <p className='UpdatedAtP'>{"更新日：" + formatDate(receivedData.updatedAt) + "　作成日：" + formatDate(receivedData.createdAt)}</p>
            {receivedData.tags.map((tags) => (
              <span>{tags.name}</span>
            ))}
            {parse(receivedDataContent)}
          </div>
          <Sidebar titledata={titledata}></Sidebar>

        </div>


        <ScrollToTopButton />

        <Footer />

      </div >



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


export default Article;