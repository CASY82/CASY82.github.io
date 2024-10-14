import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage';
import PostList from './pages/PostList'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import './styles/App.css';

const App = () => {
  return (
    <Router>
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <main>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/posts" element={<PostList />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
