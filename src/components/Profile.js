import React from 'react';
import styled from 'styled-components';

const ProfileContainer = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 15px;
`;

const Name = styled.h2`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.5em;
`;

const Bio = styled.p`
  margin-bottom: 10px;
  line-height: 1.6;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 10px;
`;

const SocialLink = styled.a`
  color: #007bff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

function Profile() {
  return (
    <ProfileContainer>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar src="/images/profile.jpg" alt="プロフィール画像" /> {/* プロフィール画像のパス */}
        <div>
          <Name>あなたの名前</Name>
          <Bio>
            IT業界を目指して学習に励んでいる[あなたの名前]です。
            このブログでは、日々の学習で得た知識や技術のアウトプットとして、様々な情報を発信していきます。
            興味のある分野は、[興味のある分野1]、[興味のある分野2]、[興味のある分野3]などです。
            どうぞよろしくお願いします！
          </Bio>
        </div>
      </div>
      <SocialLinks>
        <SocialLink href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer">Twitter</SocialLink>
        <SocialLink href="https://github.com/your_github" target="_blank" rel="noopener noreferrer">GitHub</SocialLink>
        {/* 他のSNSアカウントへのリンクもここに追加できます */}
      </SocialLinks>
    </ProfileContainer>
  );
}

export default Profile;