import React from 'react'
import './Landing.css'
import { LeftColumn, CenterColumn, RightColumn } from '../index'

const Landing = () => {

  return (
    <div className='landing-container'>
      <LeftColumn />
      <CenterColumn />
      <RightColumn />
    </div>
  )
}

export default Landing