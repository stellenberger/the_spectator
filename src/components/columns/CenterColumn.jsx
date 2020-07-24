import React from 'react'
import './Columns.css'
import { CenterNewsCard } from '../index'

const CenterColumn = ({news}) => {
  return (
    <div className='center-column-container'>
      {news && news.slice(2, 4).map(newsArticle => {
        return(
          <CenterNewsCard newsArticle={newsArticle}/>
        )
      })}
    </div>
  )
}

export default CenterColumn