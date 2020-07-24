import React, { useState, useEffect } from 'react'
import './Columns.css'
import axios from 'axios'
import { LeftNewsCard } from '../index'

const LeftColumn = () => {
  const [news, setNews] = useState(null)

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.REACT_APP_API_KEY)
      .then(response => {
        console.log('Successful response', response)
        setNews(response.data.articles)
      })
      .catch(error => {
        console.log('There was an error processing this request', error)
      })
  }, [])
  return (
    <div className='left-column-container'>
      {news && news.map(newsArticle => {
        return(
          <LeftNewsCard newsArticle={newsArticle}/>
        )
      })}
    </div>
  )
}

export default LeftColumn