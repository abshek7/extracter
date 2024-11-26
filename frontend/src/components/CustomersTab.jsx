import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography } from '@mui/material';

const CustomersTab = () => {
  const customers = useSelector((state) => state.data.customers);

  return (
    <TableContainer component={Paper} elevation={3} sx={{ padding: 2, marginTop: 2 }}>
        <Typography variant="h6" sx={{ padding: 2, textAlign: 'center', backgroundColor: '#6C63FF', color: '#FFF' }}>
        Customers
        </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell><strong>Customer Name</strong></TableCell>
            <TableCell><strong>Phone Number</strong></TableCell>
            <TableCell><strong>Total Purchase Amount</strong></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.length > 0 ? (
            customers.map((customer, index) => (
              <TableRow key={index} hover>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.phoneNumber}</TableCell>
                <TableCell>{customer.totalPurchaseAmount}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} align="center">
                No customers found
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomersTab;
