
import { Fragment, useContext} from 'react'
import {Outlet,Link} from 'react-router-dom'
import './Navigation.scss'
import Crown from '../../assets/crown.svg'
import { UserContext } from '../../../context/UserContext'
import { signOutUser } from '../../../utils/firebase.utils'
import ProductPage from '../product/ProductPage'
import Dropdown from '../product/cart-dropdown'
import { CartItemContext } from '../../../context/CartItemContext'

const Navigation=()=>{
  const {currentUser,setCurrentUser}=useContext(UserContext);
  const {isCartOpen}=useContext(CartItemContext);
  const signOutHandler=async()=>{
      await signOutUser();
      // setCurrentUser(null);
  }
  return(
    <Fragment>
    <div className='navigation'>
       <Link className='logo-container' to="/">
           <img src={Crown} alt='logo'/>
       </Link>
         <div className='nav-links-container'>
           <Link className='nav-link' to="/products">Products</Link>
            {
              currentUser?
              <Link className='nav-link' to="/" onClick={signOutHandler}>Sign-out</Link>:
              <Link className='nav-link' to="/sign-in">Sign-up</Link>
            }
            <div>
              <ProductPage/>
            
         </div>
         </div>
            {
              isCartOpen && <Dropdown/>
            }
       </div>
       <Outlet/>
       </Fragment>
  )
}
   
   
  export default Navigation