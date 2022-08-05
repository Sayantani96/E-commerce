// import React,{useContext,Fragment} from 'react'
// import { CategoriesContext } from '../../../context/CategoriesContext'
import './product.scss';
// import CategoryPreview from './CategoryPreview/CategoryPreview';
import {Routes,Route} from 'react-router-dom'
import CategoriesPreview from '../item-preview/CategoriesPreview';
import CategoryRoutes from '../category-routes/CategoryRoutes';
const Product = () => {
 

    return (
      <Routes>
        <Route index element={<CategoriesPreview/>}/>
        <Route path=":category" element={<CategoryRoutes/>}/>
      </Routes>
    );
}

export default Product
