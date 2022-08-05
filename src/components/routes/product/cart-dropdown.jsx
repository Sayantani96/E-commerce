import React, { useContext } from 'react'
import Button from '../../Button/Button'
import CartItem from './CartItem'
import './dropdown.scss'
import { CartItemContext } from '../../../context/CartItemContext'
import {useNavigate} from 'react-router-dom'
const Dropdown = () => {
  const {cartItems,setIsCartOpen}=useContext(CartItemContext);
  const navigate=useNavigate();
  const cartCloseAndNavigate=()=>{
    navigate('/checkout');
    setIsCartOpen(false);
  }
  return (
    <div className='cart-dropdown-container'> 
      <div className='cart-items'>
       {
        cartItems.map((item)=><CartItem key={item.id} cartItem={item}/>)
       }
       </div>
        <Button buttonText='Checkout' onClick={cartCloseAndNavigate}/>
    </div>
  )
}

export default Dropdown

