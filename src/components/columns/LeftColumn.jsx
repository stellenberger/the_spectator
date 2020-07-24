import React from 'react'
import './Columns.css'
import { LeftNewsCard } from '../index'

const LeftColumn = ({news}) => {
  return (
    <div className='left-column-container'>
      {news && news.slice(0, 2).map(newsArticle => {
        return(
          <LeftNewsCard newsArticle={newsArticle}/>
        )
      })}
    </div>
  )
}

export default LeftColumn