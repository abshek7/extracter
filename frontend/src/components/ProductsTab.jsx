import React from 'react';
import { useSelector } from 'react-redux';

const ProductsTab = () => {
  const products = useSelector((state) => state.data.products);

  return (
    <div className="products-tab">
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
            <th>Unit Price</th>
            <th>Tax</th>
            <th>Price with Tax</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <tr key={index}>
                <td>{product.name}</td>
                <td>{product.quantity}</td>
                <td>{product.unitPrice}</td>
                <td>{product.tax}</td>
                <td>{product.priceWithTax}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">No products found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ProductsTab;
