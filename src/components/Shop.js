import styled from 'styled-components';
import '../App.css';
import { useSelector, useDispatch } from "react-redux";
import { addItems, clearItems, removeItems } from '../store/Actions/actions'
import React, { useEffect } from 'react'
import store from '../store/index'

const ContentBox = styled.div`
display:flex;
justify-content: space-between;
align-items: center;
`
const ItemBox = styled.div`
border: 1px solid pink;
 padding: .5em;
 border-radius: .5em;

`
const Button = styled.button`
 cursor: pointer;
 border: none;
 font-family: inherit;
 padding: 0;
 background-color: transparent;
 display: inline-flex;
align-items: center;
justify-content: center;
background-color: #3e68ff;
color: #fff;
border-radius: 8px;
box-shadow: 0 3px 5px rgba(0, 0, 0, 0.18);
padding: 0.25em 0.75em;
min-width: 10ch;
min-height: 44px;
text-align: center;
line-height: 1.1;

&:hover{
  transform: scale(1.02)
}
`
const Container = styled.div`
width: 80%;
max-width: 960px;
margin: 0 auto;
`


const data = {
  cartItems: [
    { bookId: 1, bookName : "Master Of The Game", price: 35, category: "thrill", url: 'master_of_the_game.jpg'},
    { bookId: 2, bookName : "Tell Me Your Dreams", price: 45, category: "detective", url: 'tell_me_your_dreams.jpg'},
    { bookId: 3, bookName : "If Tomorrow Comes", price: 30, category: "thrill", url: 'if_tomorrow_comes.jpg'}
  ],
  totalPrice: 0,
}

function Shop() {
 
  // useEffect(() => {

  // })
  // console.log(data)

  const dat = useSelector(state => state.cartItems)
  console.log(dat)
  const dispatch = useDispatch()
  {store.subscribe(() => console.log("state changed"))}
 
  return (
     <Container>
        <ContentBox>
        {data.cartItems.map(item => (
          <ItemBox key={item.bookId}> 
              <img src={process.env.PUBLIC_URL + `/${item.url}`} />
              <p>Item: {item.bookName}</p>
              <p>Price: $ {item.price}</p>
              <Button onClick={() => dispatch(addItems(item.bookId))}>Add To Cart</Button>
          </ItemBox>
        ))}
        </ContentBox>
     </Container>

  );
}

export default Shop;
