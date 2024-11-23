import React from 'react';
import { useSelector } from 'react-redux';

const CustomersTab = () => {
  const customers = useSelector((state) => state.data.customers);

  return (
    <div className="customers-tab">
      <table className="table-auto w-full border">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Phone Number</th>
            <th>Total Purchase Amount</th>
          </tr>
        </thead>
        <tbody>
          {customers.length > 0 ? (
            customers.map((customer, index) => (
              <tr key={index}>
                <td>{customer.name}</td>
                <td>{customer.phoneNumber}</td>
                <td>{customer.totalPurchaseAmount}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No customers found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CustomersTab;
