import React from 'react';
import Tabs from './components/Tabs';
import FileUpload from './components/FileUpload';  
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1 className="text-center text-2xl font-bold mb-4">Invoice Management App</h1>

      {/* Add the FileUpload component here */}
      <FileUpload /> 

      <Tabs />
    </div>
  );
};

export default App;
