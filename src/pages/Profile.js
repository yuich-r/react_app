import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../components/css/Profile.css'; // スタイルシートをインポート
import './css/Main.css'; // スタイルシートをインポート



function Profile() {

  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className='main-content'>
        <div className="profile-content" style={{ display: 'flex', alignItems: 'center' }}>
          <img src="/images/profile.jpg" alt="プロフィール画像" /> {/* プロフィール画像のパス */}
          <div>
            <h2>あなたの名前</h2>
            <p>
              IT業界を目指して学習に励んでいる[あなたの名前]です。
              このブログでは、日々の学習で得た知識や技術のアウトプットとして、様々な情報を発信していきます。
              興味のある分野は、[興味のある分野1]、[興味のある分野2]、[興味のある分野3]などです。
              どうぞよろしくお願いします！
            </p>
          </div>
        </div>

      </div>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Profile;