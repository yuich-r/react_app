import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Routerを使用する場合
import Home from './pages/TopPage.js';
import ArticleList from './pages/ArticleList.js';
import Profile from './pages/Profile.js';
import ContactForm from './pages/ContactForm.js';
import Content from './components/Article.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articlelist" element={<ArticleList />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/content" element={<Content />} />

        {/* 他のルートもここに追加できます */}
      </Routes>
    </Router>
  );
}

export default App;