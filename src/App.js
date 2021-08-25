import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/site/sidebar';
import Header from './components/site/Header';
import Footer from './components/site/Footer';

function App() {
  return (
    <div>
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
