import React from "react";
import "../styles/NewsPage.css";

const dummyNews = [
  {
    title: "Red Bull denies team orders controversy after Miami GP",
    timeAgo: "15m ago",
    image: "/assets/news/redbull.jpg",
    source: "RaceFans.net",
  },
  {
    title: "Hamilton hints at new setup direction ahead of Imola",
    timeAgo: "1h ago",
    image: "/assets/news/hamilton.jpeg",
    source: "Sky Sports F1",
  },
  {
    title: "Ferrari updates bring new hope for podium finishes",
    timeAgo: "3h ago",
    image: "/assets/news/ferrari.jpg",
    source: "Motorsport.com",
  },
  // add more...
];

const NewsPage = () => {
  return (
    <div className="newsPage">
      <h1 className="newsHeader">News</h1>
      <div className="newsGrid">
        {dummyNews.map((article, index) => (
          <div key={index} className="newsCard">
            <img src={article.image} alt="news" className="newsImage" />
            <div className="newsContent">
              <p className="newsTitle">{article.title}</p>
              <p className="newsMeta">{article.timeAgo} • {article.source}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsPage;
