import React from 'react';
import '../components/css/ProfileContent.css'; // スタイルシートをインポート



function ProfileContent() {
	const profileData = {
		introduction: '',
		occupation: '',
		interests: ['Web開発', 'React', 'バックエンド開発', 'クラウド技術', 'AI・機械学習'],
		qualifications: ['応用情報技術者', 'Webデザイン検定2級', '第2種電気工事士', '陸上特殊無線技士3級'],
		learningTopics: ['情報処理安全確保支援士', 'React', 'HTML / CSS', 'Javascript']
	};

	return (
		<div className="profile">
			<h2>プロフィール</h2>
			<section>
				<h3>自己紹介</h3>
				<p>IT業界で８年経験のあるシステムエンジニアです。資格の学習やWeb開発等を通して自己研鑽をしております。</p>
				<p>発信内容としては主に、情報処理技術者試験等のIT資格の学習のアウトプット、各種開発を通して得た知見の発信を行なっていきます。</p>
			</section>
			<section>
				<h3>業務内容</h3>
				<p>工業高校卒業後、ハードウェア製品の保守業務を3年経験。</p>
				<p>その後転職を行い、現在は業務委託とゆう形でSAPなどを利用した社内業務システムの保守運用代行業務を行なっております。</p>
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

	);
}

export default ProfileContent;