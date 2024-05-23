// src/App.jsx
import  { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import StockList from './StockList';
import MarketNews from './MarketNews';

const App = () => {
  const [stocks, setStocks] = useState([]);

  const searchStock = async (query) => {
    try {
      const response = await axios.get(`https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${query}&apikey=YOUR_ALPHAVANTAGE_API_KEY`);
      const stockInfo = response.data.bestMatches.map(stock => ({
        symbol: stock['1. symbol'],
        name: stock['2. name'],
        price: Math.random() * 100 // Mock price as API doesn't provide price in search endpoint
      }));
      setStocks(stockInfo);
    } catch (error) {
      console.error('Error fetching stock data:', error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onSearch={searchStock} />
      <div className="p-4">
        <StockList stocks={stocks} />
      </div>
      <MarketNews />
    </div>
  );
};

export default App;
