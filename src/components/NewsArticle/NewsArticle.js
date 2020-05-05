import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({id, headline, img, description, url}) => {
  return (
    <div className='card'>
      <img src={img}/>
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>LINK</a>
    </div>
  )
}

export default NewsArticle;
