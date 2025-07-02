import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCryptoData } from "./features/CryptoSlice";
import axios from "axios";
import CryptoTable from "./components/CryptoTable";

function App() {
  const dispatch = useDispatch();
  const cryptoData = useSelector((state) => state.crypto.assets); // Get crypto data from Redux store

  useEffect(() => {
    // Fetch data from API if not already in Redux state
    if (!cryptoData || cryptoData.length === 0) {
      axios
        .get(
          'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin,ethereum,tether,binancecoin,solana&order=market_cap_desc&sparkline=false'
        )
        .then((response) => {
          console.log(response.data)
          dispatch(setCryptoData(response.data)); // Dispatch the data to Redux
        })
        .catch((error) => {
          console.error("Error fetching crypto data:", error);
        });
    }
  }, [dispatch, cryptoData]);

  return <CryptoTable cryptoData={cryptoData} />;
}

export default App;
