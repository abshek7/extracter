import React from 'react';
import { useSelector } from 'react-redux';

const InvoicesTab = () => {
  const invoices = useSelector((state) => state.data.invoices);

  return (
    <div className="invoices-tab">
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Customer Name</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Tax</th>
            <th>Total Amount</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {invoices.length > 0 ? (
            invoices.map((invoice, index) => (
              <tr key={index}>
                <td>{invoice.serialNumber}</td>
                <td>{invoice.customerName}</td>
                <td>{invoice.productname}</td>
                <td>{invoice.quantity}</td>
                <td>{invoice.tax}</td>
                <td>{invoice.totalAmount}</td>
                <td>{invoice.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No invoices found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InvoicesTab;
