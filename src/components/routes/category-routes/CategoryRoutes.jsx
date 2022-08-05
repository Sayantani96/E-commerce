import React,{useContext, useEffect, useState} from 'react'
import './CategoryRoutes.scss';
import {useParams} from 'react-router-dom'
import { CategoriesContext } from '../../../context/CategoriesContext';
import Button from '../../Button/Button';
import { CartItemContext } from '../../../context/CartItemContext';
const CategoryRoutes = () => {
    const {category}=useParams();
    const {categoriesMap}=useContext(CategoriesContext);
    const {addItemToCart}=useContext(CartItemContext)
    const [products,setProducts]=useState([]);

    useEffect(()=>{
        setProducts(categoriesMap[category])
    },[category,categoriesMap])

  return (
    <>
     <h2 className='category-title'>
                {category.toLocaleUpperCase()}
            </h2>
    <div className='category-container'>
        { products &&
            products.map((product)=> 
             <div className='product-card-container'>
            <img src={product.imageUrl} alt={`${product.name}`} />
            <div className='footer'>
              <span className='name'>{product.name}</span>
              <span className='price'>{product.price}</span>
            </div>
            <Button buttonText='Add to Cart' buttonType='' buttonClass='inverted' 
              onClick={()=>addItemToCart(product)}
              />
          </div>
            
           )
        }
    </div>
    </>
  )
}

export default CategoryRoutes