import styled from 'styled-components'
import './App.css';
import Header from './components/Header';
// import prod from './master_of_the_game.jpeg'
import {BrowserRouter, Switch, Routes, Route, Link} from 'react-router-dom';
import Shop from './components/Shop'
import Cart from './components/Cart';
import 'font-awesome/css/font-awesome.min.css';

function App() {

  return (
  <>
    <Header />
    jj
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Shop/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="cart"  element={<Cart/>} />
      </Routes>
      <Link to="/shop">Shop</Link>
      <Link to="/cart">Cart</Link>
    </BrowserRouter>
    
  </>

  );
}

export default App;
