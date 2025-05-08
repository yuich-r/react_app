import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import './css/Main.css'; // スタイルシートをインポート
import ProfileContent from '../components/ProfileContent';


function Profile() {

  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className='main-content'>

        <div className='content-block'>

          <ProfileContent />
        </div>
      </div>


      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Profile;