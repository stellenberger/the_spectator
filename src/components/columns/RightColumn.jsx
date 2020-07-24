import React from 'react'
import './Columns.css'
import { RightNewsCard } from '../index'

const RightColumn = ({news}) => {
  return (
    <div className='right-column-container'>
      <div className='right-column-header'>
        <p className='right-column-header-title'>Latest from <b>Coffee House</b></p>
        <p>All the latest analysis of the day's news</p>
      </div>
      {news && news.slice(0, 5).map(newsArticle => {
        return(
          <RightNewsCard newsArticle={newsArticle}/>
        )
      })}
    </div>
  )
}

export default RightColumn