import React, { Component } from 'react'
import './style.css'

class Mainpage extends Component {
  render () {
    return (
      <div className='mainpage-container'>
        <img className='mainpage-cover-img' src='https://i.imgur.com/j7nXAEH.jpg' />
        <h1 className='mainpage-cover-img-text'>Photography by Misha Holzman</h1>
      </div>
    )
  }
}

export default Mainpage
