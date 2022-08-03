import React,{useContext} from 'react'
import { ProductContext } from '../../../context/ProductContext'
import Button from '../../Button/Button';
import './product.scss';
import ProductPage from './ProductPage';
const Product = () => {
    const {products}=useContext(ProductContext);
  return (
    <>
    {/* <ProductPage/> */}
 <div className='product-card-container'>
        <div className='products-container'>
        {
         products.map(({id,name,imageUrl,price})=>(
            <div key={id} className='onHover'>
              <img src={imageUrl} alt='product image'/>
              <Button buttonText='Add to Cart' buttonType='' buttonClass='inverted'/>
              <footer>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
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