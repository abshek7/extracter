import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const ProductsTab = () => {
  const products = useSelector((state) => state.data.products);

  return (
    <TableContainer component={Paper} elevation={3} sx={{ boxShadow: '0 4px 20px rgba(0,0,0,0.1)', borderRadius: 2 ,padding: 2, marginTop: 2}}>
        <Typography variant="h6" sx={{ padding: 2, textAlign: 'center', backgroundColor: '#6C63FF', color: '#FFF' }}>
        Products
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Name</strong></TableCell>
            <TableCell><strong>Quantity</strong></TableCell>
            <TableCell><strong>Unit Price</strong></TableCell>
            <TableCell><strong>Tax</strong></TableCell>
            <TableCell><strong>Price with Tax</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.length > 0 ? (
            products.map((product, index) => (
              <TableRow key={index} hover>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.quantity}</TableCell>
                <TableCell>{product.unitPrice}</TableCell>
                <TableCell>{product.tax}</TableCell>
                <TableCell>{product.priceWithTax}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} align="center">
                No products found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ProductsTab;
