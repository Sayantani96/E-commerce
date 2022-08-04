import {Routes,Route} from 'react-router-dom'
import Checkout from './components/routes/checkout/Checkout';
import Home from './components/routes/home/home';
import Navigation from './components/routes/Navigation/Navigation';
import Product from './components/routes/product/product';
import SignIn from './components/routes/sign-in/sign-in';

function App() {
 
  return (
   <div>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      <Route path='/products' element={<Product/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      </Route>
      
    </Routes>
   </div>
  );
}

export default App;
