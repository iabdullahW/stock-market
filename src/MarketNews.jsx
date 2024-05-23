// src/MarketNews.jsx
import  { useEffect, useState } from 'react';
import axios from 'axios';

const MarketNews = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://newsapi.org/v2/everything?q=stock&apiKey=4923899a06464b08b180282879502e84');
        setNews(response.data.articles);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchNews();
  }, []);

  if (error) {
    return (
      <div className="p-4">
        <h2 className="mb-4 text-2xl">Market News</h2>
        <p className="text-red-500">Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl">Market News</h2>
      {news.length === 0 ? (
        <p>No news available</p>
      ) : (
        news.map((article, index) => (
          <div key={index} className="p-4 mb-4 bg-gray-100 rounded">
            <h2 className="text-xl">{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500">Read more</a>
          </div>
        ))
      )}
    </div>
  );
};

export default MarketNews;
