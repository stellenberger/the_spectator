import React, { useState, useEffect } from 'react'
import './Landing.css'
import axios from 'axios'
import { LeftColumn, CenterColumn, RightColumn } from '../index'

const Landing = () => {
  const [news, setNews] = useState(null)

  useEffect(() => {
    axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=" + process.env.REACT_APP_API_KEY)
      .then(response => {
        console.log('Successful response', response)
        const newsArticles = response.data.articles.filter(article => {
          if (article.author === null) {
            return 
          } else if (article.author === "") {
            return 
          }
          return article
        })
        setNews(newsArticles)
      })
      .catch(error => {
        console.log('There was an error processing this request', error)
      })
  }, [])

  return (
    <div className='landing-container'>
      <LeftColumn news={news}/>
      <CenterColumn news={news}/>
      <RightColumn news={news}/>
    </div>
  )
}

export default Landing