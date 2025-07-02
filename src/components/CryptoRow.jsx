import React from "react";

export default function CryptoRow({ data, index }) {
  const getColor = (value) =>
    value > 0 ? "text-green-500" : value < 0 ? "text-red-500" : "text-gray-500";

  // Helper function to safely format numbers or fallback to "N/A"
  const formatNumber = (value) => {
    const numberValue = parseFloat(value);
    return isNaN(numberValue) ? "N/A" : numberValue.toLocaleString();
  };

  return (
    <tr className="text-center border-b hover:bg-gray-100 transition-all duration-300">
      <td className="py-3">{index + 1}</td>
      <td className="py-3">
        <img
          src={data.image || "/default-logo.png"}
          alt={data.name}
          className="w-8 h-8 rounded-full object-cover inline-block"
        />
      </td>
      <td className="py-3 font-medium">{data.name}</td>
      <td className="py-3 text-gray-500">{data.symbol}</td>
      <td className="py-3 font-semibold text-lg">${formatNumber(data.current_price)}</td>
      <td
        className={`py-3 ${getColor(data.price_change_percentage_1h)} font-medium`}
      >
        {formatNumber(data.price_change_percentage_1h)}%
      </td>
      <td
        className={`py-3 ${getColor(data.price_change_percentage_24h)} font-medium`}
      >
        {formatNumber(data.price_change_percentage_24h)}%
      </td>
      <td
        className={`py-3 ${getColor(data.price_change_percentage_7d)} font-medium`}
      >
        {formatNumber(data.price_change_percentage_7d)}%
      </td>
      <td className="py-3 font-semibold">${formatNumber(data.market_cap)}</td>
      <td className="py-3 font-semibold">${formatNumber(data.total_volume)}</td>
      <td className="py-3">{formatNumber(data.circulating_supply)}</td>
      <td className="py-3">{data.max_supply ? formatNumber(data.max_supply) : "∞"}</td>

      {/* Static 7-day chart image */}
      <td className="py-3">
        <img
          src="/static/7d-chart.svg" // Path to the static image
          className="w-32 h-16 object-contain mx-auto"
          alt="7D Chart"
        />
      </td>
    </tr>
  );
}
