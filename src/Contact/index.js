import React, { Component } from 'react'
import ContactForm from '../ContactForm'
import './style.css'

class Contact extends Component {
  render () {
    return (
      <div className='contact-page-container' id='main-contact-page'>
        <h2 className='contact-title' id='contact-page'>Contact Me!</h2>
        {/* <div className='social-pics-container'>
          <div className='social-links-container2'>
            <a
              href='https://www.instagram.com/notions_of_real/?hl=en'
              className='social-link2'
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src='https://i.imgur.com/l9qpIO3.png'
                alt='github'
                className='social-image2'
                height='50px'
              />
            </a>
          </div>
        </div> */}
        <div className='contact-content-container'>
          <ContactForm />
        </div>
      </div>
    )
  }
}

export default Contact
