import React, { Component } from 'react'
import './style.css'

class Monochrome extends Component {
  render () {
    return (
      <div className='monochrome-container' id='monochrome'>
        <ul className='monochrome-list-container'>
          <li className='monochrome-list-item-1'><img className='monochrome-img' src='https://i.imgur.com/sTRi8Ba.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/H6iE0bu.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/FL08oHH.png' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/Jb0VIGk.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/eZbUutO.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/mv0dfk7.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/hCOZY06.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/1Aead0Z.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img-beach' src='https://i.imgur.com/eATvAJy.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/KCKZLel.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/v9Bm9hk.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/EV8NbFL.jpg' /></li>
          <li className='monochrome-list-item'><img className='monochrome-img' src='https://i.imgur.com/OWHcHoJ.jpg' /></li>
          {/* <li className='monochrome-list-item'><img className='monochrome-img' src='' /></li> */}
        </ul>
      </div>
    )
  }
}

export default Monochrome
