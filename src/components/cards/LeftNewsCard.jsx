import React from 'react'
import './NewsCards.css'

const LeftNewsCard = ({newsArticle}) => {
  console.log(newsArticle)
  return (
    <div className='left-news-card-container'>
      <a href={newsArticle.url}>
        <p><i>{newsArticle.author}</i></p>
        <div className="card-content">
          <h3>{newsArticle.title}</h3>
          <img 
            src={newsArticle.urlToImage} 
            alt="News Article"
          />
        </div>
      </a>
    </div>
  )
}

export default LeftNewsCard