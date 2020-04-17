import React, { Component } from 'react'
import About from '../About'
import Contact from '../Contact'
import Color from '../Color'
import Monochrome from '../Monochrome'
import Mainpage from '../Mainpage'
import './style.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

class Navbar extends Component {
  render () {
    return (
      <Router className='nav'>
        <div className='nav-container' id='navbar'>
          <ul className='nav-bullets'>
            <li className='links'>
              <div class='section'>
                <div class='section__item'>
                  <Link to='/Color' id='link-no-style'><h3 class='link-text nav-text-links'>color</h3></Link>
                </div>
              </div>
            </li>
            <li className='links'>
              <div class='section'>
                <div class='section__item'>
                  <Link to='/Monochrome' id='link-no-style'><h3 class='link-text nav-text-links'>monochrome</h3></Link>
                </div>
              </div>
            </li>
          </ul>
          <div className='title'>
            <div id='my-name'>
              <Link to='/' id='link-no-style'><h2 className='name-text'><span className='nav-title-span-1'>NOTIONS</span> OF<span className='nav-title-span-2'> REAL</span></h2></Link>
            </div>
          </div>
          <ul className='nav-bullets'>
            <li className='links'>
              <div class='section'>
                <div class='section__item'>
                  <Link to='/About' id='link-no-style'><h3 class='link-text nav-text-links'>about</h3></Link>
                </div>
              </div>
            </li>
            <li className='links'>
              <div class='section'>
                <div class='section__item'>
                  <Link to='/Contact' id='link-no-style'><h3 class='link-text nav-text-links'>contact</h3></Link>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <Route path='/' component={Mainpage} exact />
        <Route path='/Color' component={Color} exact />
        <Route path='/Monochrome' component={Monochrome} exact />
        <Route path='/About' component={About} exact />
        <Route path='/Contact' component={Contact} exact />

      </Router>
    )
  }
}

export default Navbar
