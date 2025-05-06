import React from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../components/css/Profile.css'; // スタイルシートをインポート
import './css/Main.css'; // スタイルシートをインポート



function Profile() {
  const profileData = {
    introduction: 'IT業界で〇〇年経験のある〇〇です。新しい技術に常に興味を持ち、学習した内容をブログでアウトプットしています。',
    occupation: '〇〇株式会社所属のエンジニア',
    interests: ['Web開発', 'React', 'バックエンド開発', 'クラウド技術', 'AI・機械学習'],
    qualifications: ['応用情報技術者', 'Webデザイン検定2級', '第2種電気工事士', '陸上特殊無線技士3級'],
    learningTopics: ['情報処理安全確保支援士', 'React', 'セキュリティ関連']
  };

  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className='main-content'>
        <div className="profile">
          <h2>プロフィール</h2>
          <section>
            <h3>自己紹介</h3>
            <p>{profileData.introduction}</p>
          </section>
          <section>
            <h3>業務内容</h3>
            <p>{profileData.occupation}</p>
          </section>
          <section>
            <h3>保有資格</h3>
            <ul>
              {profileData.qualifications.map((qualification, index) => (
                <li key={index}>{qualification}</li>
              ))}
            </ul>
          </section>
          <section>
            <h3>学習中...</h3>
            <ul>
              {profileData.learningTopics.map((learningTopic, index) => (
                <li key={index}>{learningTopic}</li>
              ))}
            </ul>
          </section>
        </div>

      </div>

      <ScrollToTopButton />
      <Footer />
    </div>
  );
}

export default Profile;