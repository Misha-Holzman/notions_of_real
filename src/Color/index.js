
import React, { Component } from 'react'
import ScrollTop from 'react-scrolltop-button'
import './style.css'

class Color extends Component {
  render () {
    return (
      <div className='color-container' id='color'>
        <ul className='color-list-container'>
          <li className='color-list-item-1'><img className='color-img' src='https://i.imgur.com/jo4NG5o.jpg' /></li>
          <ScrollTop
            text='^ top'
            distance={500}
            breakpoint={768}
            style={{ }}
            className='scroll-your-role'
            id='scroll-your-role-id'
            speed={600}
            target={0}
          />
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/5e0e7m3.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/1D81iAj.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/BuiyQBC.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/BrhqSUi.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/RKXiwVe.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/Rr35Sjd.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/nDjsQYD.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/MbUihIx.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/FOy4mNc.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/TwjhW7l.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/yoQhLYX.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/u0sjO7Z.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/5YhddTq.jpg' /></li>
          <li className='color-list-item'><img className='color-img' src='https://i.imgur.com/SujR5rA.jpg' /></li>
        </ul>
        
      </div>
    )
  }
}

export default Color
