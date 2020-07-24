import React from 'react'
import './NewsCards.css'

const RightNewsCard = ({newsArticle}) => {
  console.log(newsArticle)
  return (
    <div className='right-news-card-container'>
      <a href={newsArticle.url}>
        <p><i>{newsArticle.author}</i></p>
        <h4>{newsArticle.title}</h4>
      </a>
    </div>
  )
}

export default RightNewsCard