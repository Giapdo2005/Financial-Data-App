export function Table({ data }) {
  return (
    <div className="overflow-x-auto p-4 sm:p-10">
      <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-800 text-white">
            <th className="py-2 px-2 sm:px-4 text-left text-sm sm:text-lg">
              Ticker
            </th>
            <th className="py-2 px-2 sm:px-4 text-left text-sm sm:text-lg w-66">
              Date
            </th>
            <th className="py-2 px-2 sm:px-4 text-left text-sm sm:text-lg">
              Revenue
            </th>
            <th className="py-2 px-2 sm:px-4 text-left text-sm sm:text-lg">
              Net Income
            </th>
            <th className="py-2 px-2 sm:px-4 text-left text-sm sm:text-lg">
              Gross Profit
            </th>
            <th className="py-2 px-2 sm:px-4 text-left text-sm sm:text-lg">
              EPS
            </th>
            <th className="py-2 px-2 sm:px-4 text-left text-sm sm:text-lg">
              Operating Income
            </th>
          </tr>
        </thead>
        {data.length > 0 && (
          <tbody>
            {data.map((d, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-200" : "bg-white"}
              >
                <td className="py-2 px-2 sm:px-4">AAPL</td>
                <td className="py-2 px-2 sm:px-4 w-66">{d.date}</td>
                <td className="py-2 px-2 sm:px-4">${d.revenue}</td>
                <td className="py-2 px-2 sm:px-4">${d.netIncome}</td>
                <td className="py-2 px-2 sm:px-4">${d.grossProfit}</td>
                <td className="py-2 px-2 sm:px-4">{d.eps}</td>
                <td className="py-2 px-2 sm:px-4">${d.operatingIncome}</td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
}
