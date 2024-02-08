import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <Router>
    
    <Navbar />
    <HeroSection />
     
     
     </Router>
  );
}

export default App;
