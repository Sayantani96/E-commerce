import {Routes,Route} from 'react-router-dom'
import Checkout from './components/routes/checkout/Checkout';
import Home from './components/routes/home/home';
import Navigation from './components/routes/Navigation/Navigation';
import Product from './components/routes/product/product';
import SignIn from './components/routes/sign-in/sign-in';

import {useEffect} from 'react'
import { authChangeListener,createUserDocumentFromAuth } from './utils/firebase.utils';

function App() {
  useEffect(()=>{
    // const signChange=
    authChangeListener((user)=>{
        // console.log(user);
        if(user){
             createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
    })
},[])
 
  return (
   <div>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/products/*' element={<Product/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      </Route>
      
    </Routes>
   </div>
  );
}

export default App;
