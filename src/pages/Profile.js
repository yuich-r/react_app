import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import './css/Main.css'; // スタイルシートをインポート
import './css/Profile.css'; // スタイルシートをインポート
import ProfileContent from '../components/ProfileContent';


function Profile() {

  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className='profile-main-content'>

        <div className='profile-content-block'>
          <ProfileContent />
        </div>
      </div>


      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Profile;