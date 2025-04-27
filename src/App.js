import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // React Routerを使用する場合
import Home from './components/TopPage.js';
import Articles from './components/Articles.js';
import Profile from './components/Profile.js';
import ContactForm from './components/ContactForm.js';
import Content from './components/Content.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/form" element={<ContactForm />} />
        <Route path="/content" element={<Content />} />

        {/* 他のルートもここに追加できます */}
      </Routes>
    </Router>
  );
}

export default App;