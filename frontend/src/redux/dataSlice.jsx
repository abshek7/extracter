import { createSlice } from '@reduxjs/toolkit';
import { uploadFile } from './api';


const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    if (!(file instanceof File)) {
      reject(new Error('Invalid file object'));
    }

    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result.split(',')[1]);  
    reader.onerror = reject;
    reader.readAsDataURL(file); 
  });
};

const dataSlice = createSlice({
  name: 'data',
  initialState: {
    invoices: [],
    products: [],
    customers: [],
    loading: false,
    error: null
  },
  reducers: {
    setInvoices: (state, action) => {
      state.invoices = action.payload || [];
    },
    setProducts: (state, action) => {
      state.products = action.payload || [];
    },
    setCustomers: (state, action) => {
      state.customers = action.payload || [];
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.invoices = action.payload.invoices || [];
      state.products = action.payload.products || [];
      state.customers = action.payload.customers || [];
    }
  }
});

export const { setInvoices, setProducts, setCustomers, setData, setLoading, setError } = dataSlice.actions;


export const processFile = (file) => async (dispatch) => {
  dispatch(setLoading(true));

  try {
    // Ensure the file is a valid File object
    if (!(file instanceof File)) {
      throw new Error('Invalid file object');
    }

    // Convert file to base64
    const fileContent = await fileToBase64(file);

    // Prepare file data to send to backend
    const fileData = {
      fileContent,  // base64 encoded content
      fileName: file.name,
      mimeType: file.type
    };

    const result = await uploadFile(fileData);  // Pass the file data to uploadFile

    if (result.success) {
      console.log('Upload successful:', result.data);
      dispatch(setData(result.data));
    } else {
      console.error('Upload failed:', result.error);
      dispatch(setError(result.error));
    }
  } catch (error) {
    console.error('Process file error:', error);
    dispatch(setError(error.message));
  } finally {
    dispatch(setLoading(false));
  }
};

export default dataSlice.reducer;
