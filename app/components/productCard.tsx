//disable eslint for this file
/* eslint-disable */
import React from 'react';
import { Product } from '../models/products';

//interface for props
interface Props {
  product: Product;
}

//product card component
const ProductCard: React.FC<Props> = ({ product }) => {
  return (  
    <div className="product-card shadow-md rounded-md p-2 m-2">
      <div className='product-image'>
        <img src={product.image} alt={product.name} className='w-full h-48 object-cover rounded-md' />
      </div>
      <div className='product-info'>
        <h5>{product.name}</h5>
        <h6>{product.price}</h6>
        <p>{product.description}</p>
      </div>
    </div>
  )
}


export default ProductCard;