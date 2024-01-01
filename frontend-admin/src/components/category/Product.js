import React from 'react';

import useAsync from '../../hooks/useAsync';
import ProductServices from '../../services/ProductServices';


const Product = () => {
  const { data } = useAsync(ProductServices.getAllProducts);
  return (
    <>
      {data.map((product) => (
        <option key={product._id} id={product._id} value={product.title}>
          {product.title}
        </option>
      ))}
    </>
  );
};

export default Product;
