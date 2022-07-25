
import { Fragment } from 'react'
import {Outlet,Link} from 'react-router-dom'
import './Navigation.scss'
import Crown from '../../assets/crown.svg'
const Navigation=()=>(
    <Fragment>
 <div className='navigation'>
    <Link className='logo-container' to="/">
        <img src={Crown} alt='logo'/>
    </Link>
      <div className='nav-links-container'>
        <Link className='nav-link' to="/shop">Nav1</Link>
        <Link className='nav-link' to="/checkout">Nav2</Link>
      </div>
    </div>
    <Outlet/>
    </Fragment>
   
  )
  export default Navigation