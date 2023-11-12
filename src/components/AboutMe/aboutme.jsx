import React, { useEffect } from 'react'
import AOS from 'aos'
import me from '../../assets/images/aboutme/me.jpg'
import 'aos/dist/aos.css'
import '../AboutMe/AboutMe.css'

import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

const AboutMe = () => {

  useEffect(() => {
    AOS.init()
  }, [])

  return <>
    <section id='aboutme' className='aboutme-section'>
      <div className="container-xxl container-md container-sm">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column align-items-center">
            <div className='aboutme-content d-flex flex-column' >
              <span
                className='name'
                style={{
                  marginTop: '-0.25rem',
                  fontFamily: 'twilight lechy, sans-serif',            
                }}
              >
                Eder Cadena
              </span>
              <span
                className='career'
                style={{
                  marginTop: '0.25rem',
                  fontFamily: 'h Habis, sans-serif',                 
                }}
              >
                Front-End Web Developer
              </span>
            </div>
          </div>
          <div className="col-lg-12 d-flex justify-content-center">
            <div className='aboutme-icons d-flex flex-row justify-content-center gap-4' style={{ width: '50%' }}>
              <a href="https://www.instagram.com/edeercm/" target='_blank'><BsInstagram /></a>
              <a href="https://github.com/edeercm" target='_blank'><BsGithub /></a>
              <a href="https://www.linkedin.com/in/edeercm/" target='_blank'><BsLinkedin /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}

export default AboutMe




