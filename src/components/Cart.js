import React, { useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import {addItems, clearCart, clearItems} from '../store/Actions/actions'

const CartItem = styled.div`
min-height: 100vh;
background: gray;
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
function Cart() {
    // const dispatch = useDispatch();
    const data = useSelector(state => state.Test)
    console.log(data)
    const dispatch = useDispatch()

    const cartItems = [...new Set(data.cartItems)]
    console.log(cartItems)

    //counting items 
      cartItems.forEach(item => (
          item.count = data.cartItems.filter(cartItem => cartItem.bookId === item.bookId).length
      ))
   
    return (
        
        <CartItem>
            <h1>List of Items</h1>
                <Link to="/shop">Shop</Link>
                <Link to="/cart">Cart</Link>
            {cartItems.map(item => (
                <>
                <img src={process.env.PUBLIC_URL + `/${item.url}`} />
                <p>Item: {item.bookName}</p>
                <p>Price: $ {item.price}</p>
                {/* <p>No of items {Object.keys(data.cartItems.find(item.bookId)).length}</p> */}
                <p>No of units {item.count}</p>
                
                <Button onClick={() => dispatch()}>+</Button>
                <Button onClick={() => dispatch()}>-</Button>
                </>
            ))}
            <h1>Total Price: {data.totalPrice}</h1>
            <Button onClick={() => dispatch(clearCart())}>Clear Cart</Button>
        </CartItem>
    )
}

export default Cart
