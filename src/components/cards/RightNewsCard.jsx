import React from 'react'
import './NewsCards.css'

const RightNewsCard = ({newsArticle}) => {
  console.log(newsArticle)
  return (
    <div className='right-news-card-container'>
      <a href={newsArticle.url}>
        <p><i>{newsArticle.author}</i></p>
        <div className="card-content">
          <h4>{newsArticle.title}</h4>
        </div>
      </a>
    </div>
  )
}

export default RightNewsCard