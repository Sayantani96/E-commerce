import React from 'react'
import './homepage-item.scss'
const CategoryItem = ({category}) => {
    const {title,imageUrl}=category;
  return (
      <div  className='homepage-container'>
         <div className='background-image' style={{
            backgroundImage:`url(${imageUrl})`,
            width:'100%'
          }}/>
        <div className='category-body-container'>
        <div>
        {title}
        </div>
        <div>
          Shop Now
        </div>
        </div>
        </div>
  );
}

export default CategoryItem