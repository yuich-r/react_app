import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import '../components/css/ContactForm.css'; // スタイルシートをインポート


function ContactForm() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // ここにフォーム送信の処理を記述 (例: APIへの送信)
      console.log({ name, email, subject, message });
      alert('お問い合わせありがとうございます！'); // 簡単な完了メッセージ
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    };
  
    return (
      <div className="container">
      <Header />
      <Navigation />
      <div className="main-content">
      <div className="contact-form">
        <h2>お問い合わせ</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">お名前</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">メールアドレス</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject">件名</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">お問い合わせ内容</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="11"
              required
            ></textarea>
          </div>
          <button type="submit">送信</button>
        </form>
      </div>
        
        <ScrollToTopButton />
      </div>
      <Footer />
    </div>
      
    );
  }
  
  export default ContactForm;