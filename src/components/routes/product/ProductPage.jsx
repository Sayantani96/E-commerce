import React, { useContext } from 'react'
import Bag from '../../assets/shopping-bag.svg';
import './cart-icon.scss'
import { CartItemContext } from '../../../context/CartItemContext';
const ProductPage = () => {
  const {setIsCartOpen,isCartOpen}=useContext(CartItemContext);
  const dropdownHandler=()=>{
      setIsCartOpen(!isCartOpen);
  }
  return (
    <div className='cart-icon-container' onClick={dropdownHandler}>
        <img src={Bag} className='shopping-icon'/>
        <span className='item-count'>10</span>
    </div>
    
  )
}

export default ProductPage