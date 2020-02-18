import React, { Component } from 'react'
import './style.css'

class Navbar extends Component {
  render () {
    return (
      <div className='main-nav-container'>
        <div className='name-container'>
          <h1 className='first-name'>Misha</h1>
          <img className='spaceship-img' src='https://i.imgur.com/YHouqra.png' />
          <h2 className='last-name'><em>Holzman</em></h2>
          <div className='divider-div-1'>
            <hr className='hr-1' />
          </div>
          <h3 className='job-title'>Web Designer // Developer</h3>
          {/* <h4 className='cover-letter-title'>Cover Letter</h4> */}
          {/* <h4 className='cover-letter-title'>Web Designer Position at CompanyName</h4> */}
        </div>
        <div className='text-body-container'>
          <p className='text-body-parag'>
            As a local NYC creative web designer and developer with an eagerness to build and be part of the evolution
            of the web, I am very excited to apply to the Web Designer position at B12. I believe what B12 is doing is
            so important, that B12 is using technology, specifically AI, to deliver a more effective way of creating web
            presences for businesses, while also understanding the importance of human involvement, creativity and
            connection.
          </p>
          <p className='text-body-parag'>
            My approach to web design and development is driven by creativity and guided by user-experience,
            with an approach that orients the design and feel of the clients online presence with their personal
            brand identity. Coming from a very creative and artistic background, I have been designing websites
            using my eye for modern, beautiful and cohesive composition. I have high-level technical knowledge
            and experience in HTML5, CSS3, and JavaScript, and built my projects in ReactJS. As a CSS enthusiast,
            I am always exploring new techniques to create innovative and compelling web experiences through
            mastery of flex-box, exploration into animations and SVG’s, and very sharp attention to every detail
            of light, color, shape, and layout.
          </p>
          <p className='text-body-parag'>
            For the last year, I have been freelancing websites. Turning unstructured customer content and
            requests into into pixel-perfect web designs that work on all devices is my bread and butter.
            Prior to freelancing, I worked with the Neighborhood Start Fund, a company that supports entrepreneurs
            and start-ups from underserved areas. I worked closely with a small team, and was the lead in the design
            of the whole site. I have WYSIWYG website editor experience as well. I designed and created a site using
            Wix for a fine artist and a site for a energy medicine healer using Squarespace. I have skill in
            imagining what direction a design should go in based on the clients business, and design fast and
            creatively. I am very excited to learn B12 Design Suite!
          </p>
          {/* <p className='text-body-parag'></p> */}
        </div>
      </div>
    )
  }
}

export default Navbar
