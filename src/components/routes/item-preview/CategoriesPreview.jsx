import React,{useContext,Fragment} from 'react'
import { CategoriesContext } from '../../../context/CategoriesContext'
import CategoryPreview from '../product/CategoryPreview/CategoryPreview';
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

    return (
      <>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </>
    );
}

export default CategoriesPreview
