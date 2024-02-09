import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
import Footer from './components/Footer';


function App() {
  return (
    <>
    <Router>
   <Navbar />
    
    <Home />
     
    <Footer />
    
     </Router>
     </>
  );
}

export default App;
