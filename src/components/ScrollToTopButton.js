import React, { useState, useEffect } from 'react';
import './css/ScrollToTopButton.css'; // スタイルシートをインポート

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // スクロールイベントをリッスン
    const handleScroll = () => {
      if (window.scrollY > 100) { // 100px以上スクロールしたらボタンを表示
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // コンポーネントがアンマウントされたときにイベントリスナーを削除
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // スムーズにスクロール
    });
  };

  return (
    <div className={`scroll-to-top ${isVisible ? 'visible' : ''}`} onClick={scrollToTop}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
        <path fillRule="evenodd" d="M12 14.25a.75.75 0 01-.75-.75V2.862l-5.47 5.47a.75.75 0 11-1.06-1.06l6.75-6.75a.75.75 0 011.06 0l6.75 6.75a.75.75 0 11-1.06 1.06l-5.47-5.47V13.5a.75.75 0 01-.75.75z" clipRule="evenodd" />      </svg>
    </div>
  );
}

export default ScrollToTopButton;