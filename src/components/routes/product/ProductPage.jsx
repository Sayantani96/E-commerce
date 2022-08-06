import React, { useContext } from 'react'
import Bag from '../../assets/shopping-bag.svg';
import './cart-icon.scss'
import { CartItemContext } from '../../../context/CartItemContext';
const ProductPage = () => {
  const {setIsCartOpen,isCartOpen,cartItems}=useContext(CartItemContext);
  const cartContentCounter=cartItems.reduce((accumulator,{qty})=>accumulator+qty,0);
  const dropdownHandler=()=>{
      setIsCartOpen(!isCartOpen);
  }
  return (
    <div className='cart-icon-container' onClick={dropdownHandler}>
        <img src={Bag} alt='shopping bag' className='shopping-icon'/>
        <span className='item-count'>{cartContentCounter}</span>
    </div>
    
  )
}

export default ProductPage