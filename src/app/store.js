import { configureStore } from "@reduxjs/toolkit";
import cryptoReducer from "../features/CryptoSlice";
export const store = configureStore({
    reducer: {
      crypto: cryptoReducer,
    },
  });
  