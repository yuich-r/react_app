import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Routerを使用する場合
import ArticleList from './pages/ArticleList.js';
import Profile from './pages/Profile.js';
import ContactForm from './pages/ContactForm.js';
import Article from './pages/Article.js';
import TopPage from './pages/TopPage.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TopPage />} />
        <Route path="/articlelist" element={<ArticleList />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/content" element={<Article />} />

        {/* 他のルートもここに追加できます */}
      </Routes>
    </Router>
  );
}

export default App;