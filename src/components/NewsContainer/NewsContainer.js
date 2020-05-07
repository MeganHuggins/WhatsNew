import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle';

const NewsContainer = ({ news }) => {
  const newsCards = news.map(article => {
    return (
      <NewsArticle
        key={article.id}
        id={article.id}
        headline={article.headline}
        img={article.img}
        description={article.description}
        url={article.url}
      />
    )
  });

  return (
    <main className='news-container' data-testid='news-container'>
      {newsCards}
    </main>
  )
}

export default NewsContainer;
