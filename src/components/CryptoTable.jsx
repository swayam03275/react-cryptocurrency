import React from "react";
import CryptoRow from "./CryptoRow"; // Ensure you import CryptoRow

export default function CryptoTable({ cryptoData }) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 via-indigo-50 to-purple-50 py-6 px-4">
      <h1 className="text-center text-4xl font-bold text-gray-800 mb-8">Crypto Tracker</h1>
      <div className="overflow-x-auto bg-white shadow-2xl rounded-lg">
        <table className="min-w-full table-auto">
          <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
            <tr>
              <th className="py-3 px-4 text-sm font-medium">#</th>
              <th className="py-3 px-4 text-sm font-medium">Logo</th>
              <th className="py-3 px-4 text-sm font-medium">Name</th>
              <th className="py-3 px-4 text-sm font-medium">Symbol</th>
              <th className="py-3 px-4 text-sm font-medium">Price</th>
              <th className="py-3 px-4 text-sm font-medium">Change (1h)</th>
              <th className="py-3 px-4 text-sm font-medium">Change (24h)</th>
              <th className="py-3 px-4 text-sm font-medium">Change (7d)</th>
              <th className="py-3 px-4 text-sm font-medium">Market Cap</th>
              <th className="py-3 px-4 text-sm font-medium">Volume (24h)</th>
              <th className="py-3 px-4 text-sm font-medium">Circulating Supply</th>
              <th className="py-3 px-4 text-sm font-medium">Max Supply</th>
              <th className="py-3 px-4 text-sm font-medium">Chart</th>
            </tr>
          </thead>
          <tbody>
            {cryptoData && cryptoData.length > 0 ? (
              cryptoData.map((data, index) => (
                <CryptoRow key={data.id} data={data} index={index} />
              ))
            ) : (
              <tr>
                <td colSpan="13" className="text-center py-4 text-lg text-gray-500">
                  Loading data...
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}
