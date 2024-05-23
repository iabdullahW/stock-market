// src/StockList.jsx


const StockList = ({ stocks }) => {
  return (
    <div className="p-4">
      {stocks.map((stock) => (
        <div key={stock.symbol} className="p-4 mb-4 bg-gray-100 rounded">
          <h2 className="text-xl">{stock.name}</h2>
          <p>Symbol: {stock.symbol}</p>
          <p>Price: ${stock.price.toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default StockList;
