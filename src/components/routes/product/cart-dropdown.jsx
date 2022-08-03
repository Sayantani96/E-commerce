import React, { useContext } from 'react'
import Button from '../../Button/Button'
import CartItem from './CartItem'
import './dropdown.scss'
import { CartItemContext } from '../../../context/CartItemContext'
const Dropdown = () => {
  const {cartItems}=useContext(CartItemContext);
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
       {
        cartItems.map((item)=><CartItem key={item.id} cartItem={item}/>)
       }
       </div>
        <Button buttonText='Checkout'/>
    </div>
  )
}

export default Dropdown

