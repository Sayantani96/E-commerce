import { createContext, useState,useEffect } from "react";
import PRODUCT_DATA from '../product-data.js';
import { getCategoriesAndDocuments } from "../utils/firebase.utils.js";
export const CategoriesContext=createContext({
    categoriesMap:{},
})

export const CategoriesProvider=({children})=>{
    const [categoriesMap, setCategoriesMap] = useState({});

    useEffect(() => {
      const getCategoriesMap = async () => {
        const categoryMap = await getCategoriesAndDocuments('categories');
        setCategoriesMap(categoryMap);
      };
  
      getCategoriesMap();
    }, []);
  
    const value = { categoriesMap };
    return (
      <CategoriesContext.Provider value={value}>
        {children}
      </CategoriesContext.Provider>
    );
}