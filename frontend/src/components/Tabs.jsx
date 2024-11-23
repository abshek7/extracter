import React from 'react';
import InvoicesTab from './InvoicesTab';
import ProductsTab from './ProductsTab';
import CustomersTab from './CustomersTab';

const Tabs = () => {
  const [activeTab, setActiveTab] = React.useState('invoices');

  return (
    <div className="tabs-container">
      <div className="tabs mb-4 flex gap-4">
        <button
          className={`tab-button ${activeTab === 'invoices' ? 'active' : ''}`}
          onClick={() => setActiveTab('invoices')}
        >
          Invoices
        </button>
        <button
          className={`tab-button ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => setActiveTab('products')}
        >
          Products
        </button>
        <button
          className={`tab-button ${activeTab === 'customers' ? 'active' : ''}`}
          onClick={() => setActiveTab('customers')}
        >
          Customers
        </button>
      </div>
      <div className="tab-content">
        {activeTab === 'invoices' && <InvoicesTab />}
        {activeTab === 'products' && <ProductsTab />}
        {activeTab === 'customers' && <CustomersTab />}
      </div>
    </div>
  );
};

export default Tabs;
