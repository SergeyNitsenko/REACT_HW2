import './App.css'
import { Navigation } from './components/Navigation/Navigation.js';
import { Banner } from './components/Banner/Banner.js';
import { Header } from './components/Header/Header.js';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Card } from './components/Card/Card';
import { Basket } from './components/Basket/Basket';



function App() {
  const { state } = useLocation();
  return (
    <div className='container'>
      <Header />
      {
        !state && <>
          <Banner />
          <Navigation />
        </>
      }
      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/:url' element={<Card />} />
        <Route path='/Basket' element={<Basket />} />
      </Routes>

    </div>

  );
}

export default App;
