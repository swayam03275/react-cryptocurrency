import { createSlice } from "@reduxjs/toolkit";

// Initial state with assets and error
const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    assets: [],
    status: 'idle', // Track the loading state
    error: null,
  },
  reducers: {
    setCryptoData(state, action) {
      state.assets = action.payload; // Set the crypto data in the state
    },
    updateCrypto(state, action) {
      const { id, updates } = action.payload;
      const index = state.assets.findIndex((item) => item.id === id);
      if (index !== -1) {
        state.assets[index] = { ...state.assets[index], ...updates };
      }
    },
  },
});

export const { setCryptoData, updateCrypto } = cryptoSlice.actions;
export default cryptoSlice.reducer;
