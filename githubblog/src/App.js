import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MainPage from './pages/MainPage';
import Header from './pages/Header';
import Sidebar from './pages/Sidebar';
import Footer from './pages/Footer';
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
          </Routes>
        </main>
      </div>
      <Footer />
    </div>
    </Router>
  );
};

export default App;
