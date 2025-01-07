export function Table({ data }) {
  return (
    <div className="overflow-x-auto p-10">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-4 text-left text-lg">Ticker</th>
            <th className="py-2 px-4 text-left text-lg">Date</th>
            <th className="py-2 px-4 text-left text-lg">Revenue</th>
            <th className="py-2 px-4 text-left text-lg">Net Income</th>
            <th className="py-2 px-4 text-left text-lg">Gross Profit</th>
            <th className="py-2 px-4 text-left text-lg">EPS</th>
            <th className="py-2 px-4 text-left text-lg">Operating Income</th>
          </tr>
        </thead>
        <tbody>
          {data.map((d, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
            >
              <td className="py-2 px-4">AAPL</td>
              <td className="py-2 px-4">{d.date}</td>
              <td className="py-2 px-4">${d.revenue}</td>
              <td className="py-2 px-4">${d.netIncome}</td>
              <td className="py-2 px-4">${d.grossProfit}</td>
              <td className="py-2 px-4">{d.eps}</td>
              <td className="py-2 px-4">${d.operatingIncome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
