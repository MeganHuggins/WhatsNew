import React from 'react';
import './NewsContainer.css';
import NewsArticle from './NewsArticle';

class NewsContainer = ({news}) => {
  const newCards = news.map(article => {
    return (
      <NewsArticle
        id = {article.id}
        headline = {artticle.headline}
        img = {article.img}
        description = {article.description}
        url = {article.url}
      />
    )
  });

  return (
    <main className='news-container'>
      {newsCards}
    </main>
  )
}

export default NewsContainer;
