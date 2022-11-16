import React,{useContext,Fragment} from 'react'
import { CategoriesContext } from '../../../context/CategoriesContext'
import CategoryPreview from '../product/CategoryPreview/CategoryPreview';
const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

    return (
      <Fragment>
      {Object.keys(categoriesMap).map((key) => {
        const products = categoriesMap[key];
        return <CategoryPreview key={key} title={key} products={products} />;
      })}
    </Fragment>
    );
}

export default CategoriesPreview
