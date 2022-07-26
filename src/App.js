import {Routes,Route} from 'react-router-dom'
import Home from './components/routes/home/home';
import Navigation from './components/routes/Navigation/Navigation';
import SignIn from './components/routes/sign-in/sign-in';
function App() {
 
  return (
   <div>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='/sign-in' element={<SignIn/>}/>
      </Route>
      
    </Routes>
   </div>
  );
}

export default App;
