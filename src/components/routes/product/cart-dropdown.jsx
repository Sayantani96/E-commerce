import React, { useContext } from 'react'
import Button from '../../Button/Button'
import CartItem from './CartItem'
import './dropdown.scss'
import { CartItemContext } from '../../../context/CartItemContext'
import {useNavigate} from 'react-router-dom'
const Dropdown = () => {
  const {cartItems}=useContext(CartItemContext);
  const navigate=useNavigate();
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
       {
        cartItems.map((item)=><CartItem key={item.id} cartItem={item}/>)
       }
       </div>
        <Button buttonText='Checkout' onClick={()=>navigate('/checkout')}/>
    </div>
  )
}

export default Dropdown

