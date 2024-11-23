import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { uploadFile } from '../redux/api'; 
import { setInvoices, setProducts, setCustomers } from '../redux/dataSlice';
import { setData, setLoading, setError } from '../redux/dataSlice';

const FileUpload = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.data);

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const maxSizeInBytes = 50 * 1024 * 1024; 
    if (file.size > maxSizeInBytes) {
      alert('File is too large. Maximum size allowed is 50MB.');
      return;
    }

    console.log('File selected:', file);
    dispatch({ type: 'data/uploadStart' });

    const result = await uploadFile(file);

    if (result.success) {
      dispatch(setData(result.data));
      dispatch({ type: 'data/uploadSuccess' });
    } else {
      dispatch({ type: 'data/uploadFailure', payload: result.error });
      console.error('Server error:', result.error);
    }
  };

  return (
    <div className="file-upload">
      <input 
        type="file" 
        onChange={handleFileChange}
        disabled={loading}
      />
      {loading && <p>Processing file...</p>}
      {error && <p className="error">Error: {error}</p>}
    </div>
  );
};

export default FileUpload;