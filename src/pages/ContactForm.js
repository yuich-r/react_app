import React from 'react';
import { useState } from 'react';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ScrollToTopButton from '../components/ScrollToTopButton';
import './css/ContactForm.css'; // スタイルシートをインポート
import { init, send } from 'emailjs-com';




function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  const handleSubmit = () => {
    // ここにフォーム送信の処理を記述 (例: APIへの送信)
    const userID = process.env.REACT_APP_USER_ID
    const serviceID = process.env.REACT_APP_SERVICE_ID
    const templateID = process.env.REACT_APP_TEMPLATE_ID

    if (
      userID !== undefined &&
      serviceID !== undefined &&
      templateID !== undefined
    ) {
      init(userID);

      const template_param = {
        to_name: name,
        from_email: email,
        title: subject,
        message: message,
      };


      send(serviceID, templateID, template_param).then(() => {
        window.alert('お問い合わせありがとうございます！');

        setName('');
        setEmail('');
        setMessage('');
        setSubject('');
      });
    }

  };

  return (
    <div className="container">
      <Header />
      <Navigation />
      <div className="contact-form">
        <h2>お問い合わせ</h2>
        <form>
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
          <button onClick={handleClick} >送信</button>
        </form>
      </div>

      <ScrollToTopButton />
      <Footer />
    </div >

  );
}

export default ContactForm;