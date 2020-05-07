import React from 'react';
import './NewsArticle.css';
import arrowImage from '../../icons/arrow.png';

const NewsArticle = ({id, headline, img, description, url}) => {
  const style = {
    backgroundImage: `url('${img}')`,
  };

  return (
    <div data-testid='card' className='card'>
      <div
      data-testid={img}
      className='card-img'
      style={style}
      />
      <h3>{headline}</h3>
      <p>{description}</p>
      <div className='article-link'>
        <a
        data-testid={url}
        href={url}>Link To Article
        </a>
        <img src={arrowImage} alt='arrow pointing right' />
      </div>
    </div>
  )
}

export default NewsArticle;
