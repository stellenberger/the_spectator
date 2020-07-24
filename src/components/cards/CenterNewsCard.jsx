import React from 'react'
import './NewsCards.css'

const CenterNewsCard = ({newsArticle}) => {
  console.log(newsArticle)
  return (
    <div className='center-news-card-container'>
      <a href={newsArticle.url}>
        <p><i>{newsArticle.author}</i></p>
        <h3>{newsArticle.title}</h3>
        <img 
          src={newsArticle.urlToImage} 
          alt="News Article"
        />
      </a>
    </div>
  )
}

export default CenterNewsCard