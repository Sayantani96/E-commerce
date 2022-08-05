
import {useContext} from 'react'
import {Link} from 'react-router-dom'
import '../product.scss';
import { CartItemContext } from '../../../../context/CartItemContext';
import './CategoryPreview.scss';
import Button from '../../../Button/Button';


const CategoryPreview = ({ title, products }) => {
    const {addItemToCart}=useContext(CartItemContext)
    return (
  <div className='category-preview-container'>
    <h2>
        <Link to={title.toLowerCase()}>
        <span className='title'>{title.toUpperCase()}</span>
        </Link>
    </h2>
    <div className='preview'>
      {products
        .filter((_, idx) => idx < 4)
        .map((product) => (
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
        ))}
    </div>
  </div>
);
}

export default CategoryPreview;