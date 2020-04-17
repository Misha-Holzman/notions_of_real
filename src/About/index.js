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
          <p className='about-text'>Lorem ipsum odor amet, consectetuer adipiscing elit. Ac purus in massa egestas mollis varius;
              dignissim elementum. Mollis tincidunt mattis hendrerit dolor eros enim, nisi ligula ornare.
              Hendrerit parturient habitant pharetra rutrum gravida porttitor eros feugiat. Mollis elit
              sodales taciti duis praesent id. Consequat urna vitae morbi nunc congue.
          </p>
        </div>
      </div>
    )
  }
}

export default About
