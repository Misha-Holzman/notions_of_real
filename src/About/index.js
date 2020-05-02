import React, { Component } from 'react'
import './style.css'

class About extends Component {
  render () {
    return (
      <div className='about-container' id='about'>
        <div className='about-img-div'>
          <img className='about-img' src='https://i.imgur.com/s5SvP3z.png' />
          {/* <div className='about-text-name-div'>
          </div> */}
        </div>
        <div className='about-text-div'>
          <h1 className='about-text-name-1'>Misha Holzman</h1>
          {/* <h1 className='about-text-name-2'>Street Photographer</h1> */}
          <p className='about-text'>I grew up and live in NYC where shapes, colors,
            and light are abundant and complex. I look for color and shapes that clash
            well and dance with each other. I try to find the edge between abstraction
            and realism, a notion of what we usually see and understand, and let the
            shapes and color within the frame have as much of a voice as the objects
            you might recognize.
          </p>
        </div>
      </div>
    )
  }
}

export default About
