import './App.css'
import { Navigation } from '../Header/Navigation/Navigation.js';
import { Banner } from '../Header/Banner/Banner.js';
import { Header } from '../Header/Header.js';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { Card } from '../Main/Card/Card';
import { Basket } from '../Header/Basket/Basket.js';
import { Footer } from '../Footer/Footer';
import { AddBasket } from '../Main/Card/AddBasket/AddBasket';



function App() {
  const { state } = useLocation();
  return (
    <div className='container'>
      <Header />
      {
        !state &&
        <>
          <Banner />
          <Navigation />
        </>
      }

      <Routes>
        <Route path='/' element={<Card />} />
        <Route path='/:url' element={<Card />} />
        <Route path='/Basket' element={<Basket />} />
        <Route path='/AddBasket' element={<AddBasket />} />
      </Routes>
      <Footer />
    </div >

  );
}

export default App;
