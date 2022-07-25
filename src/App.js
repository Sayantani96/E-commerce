import {Routes,Route} from 'react-router-dom'
import Home from './components/routes/home/home';
import Navigation from './components/routes/Navigation/Navigation';
function App() {
 
  return (
   <div>
    <Routes>
      <Route path='/' element={<Navigation/>}>
      <Route index element={<Home/>}/>
      </Route>
      
    </Routes>
   </div>
  );
}

export default App;
