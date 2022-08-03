import React,{useContext} from 'react'
import { ProductContext } from '../../../context/ProductContext'
import Button from '../../Button/Button';
import './product.scss';
import { CartItemContext } from '../../../context/CartItemContext';
const Product = () => {
    const {products}=useContext(ProductContext);
    const {addItemToCart}=useContext(CartItemContext)
  return (
    <>
 <div className='product-card-container'>
        <div className='products-container'>
        {
         products.map((product)=>(
            <div key={product.id} className='onHover'>
              <img src={product.imageUrl} alt='product image'/>
              <Button buttonText='Add to Cart' buttonType='' buttonClass='inverted' 
              onClick={()=>addItemToCart(product)}
              />
              <footer>
                <span className='name'>{product.name}</span>
                <span className='price'>{product.price}</span>
              </footer>
           </div>
           )
           )
   }
        </div>
     </div>
     </>
  )
    
   
}

export default Product