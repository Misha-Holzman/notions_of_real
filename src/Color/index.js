
import React, { Component } from 'react'
import ScrollTop from 'react-scrolltop-button'
import './style.css'

class Color extends Component {
  render () {
    return (
      <div className='color-container' id='color'>
        <ul className='color-list-container'>
          <li className='color-list-item-1'>
            <img className='color-img' src='https://i.imgur.com/jo4NG5o.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
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
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/5e0e7m3.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/1D81iAj.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/BuiyQBC.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/BrhqSUi.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/RKXiwVe.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/Rr35Sjd.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/nDjsQYD.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/MbUihIx.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/FOy4mNc.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/TwjhW7l.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/yoQhLYX.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/u0sjO7Z.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/5YhddTq.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
          <li className='color-list-item'>
            <img className='color-img' src='https://i.imgur.com/SujR5rA.jpg' />
            <p className='img-desc-text'>Blue Space // 2018</p>
          </li>
        </ul>
        
      </div>
    )
  }
}

export default Color
