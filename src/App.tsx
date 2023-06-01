import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

interface NewsItem {
  Ticker: string;
  Title: string;
  Link: string;
  PublishDate: string;
}

const App: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/latestnews.json');
        const data = await response.json();
        setNews(data);
      } catch (error) {
        console.log('Error fetching news:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Latest News</h1>
      {news.map((item, index) => (
        <div className="card mb-3" key={index}>
          <div className="card-header">{item.Ticker}</div>
          <div className="card-body">
            <h5 className="card-title">{item.Title}</h5>
            <p className="card-text">Publish Date: {item.PublishDate}</p>
            <a href={item.Link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
