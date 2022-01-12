import styled from 'styled-components'
import './App.css';
import Header from './components/Header';
// import prod from './master_of_the_game.jpeg'
import {BrowserRouter, Switch, Routes, Route} from 'react-router-dom';
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
        <Route path="/" element={<App/>}/>
        <Route path="/shop" element={<Shop/>}/>
        <Route exact path="/cart"  element={<Cart/>} />
          
      </Routes>
    </BrowserRouter>
  </>

  );
}

export default App;
