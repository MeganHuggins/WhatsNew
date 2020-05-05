import React from 'react';
import './NewsArticle.css';

const NewsArticle = ({id, headline, img, description, url}) => {
  const style = {
    backgroundImage: `url('${img}')`,
  };

  return (
    <div className='card'>
      <div className="card-img" style={style}/>
      <h3>{headline}</h3>
      <p>{description}</p>
      <a href={url}>LINK</a>
    </div>
  )
}

export default NewsArticle;
