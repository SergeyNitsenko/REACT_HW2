import './App.css'
import { Navigation } from './components/Navigation/Navigation.js';
import { Banner } from './components/Banner/Banner.js';
import { Header } from './components/Header/Header.js';
import { Routes, Route, Link } from 'react-router-dom';
import { Logo } from './components/Logo/Logo';
import { Card } from './components/Card/Card';



function App() {
  return (
    <div className='container'>
      <Header />
      <Banner />
      <Navigation />
      <Routes>
        <Route path='/:url' element = {<Card/>}/>
      </Routes>
    
    </div>
    
  );
}

export default App;
